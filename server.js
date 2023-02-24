const express = require('express');
const { buildSchema } = require("graphql");
const { GraphQLScalarType } = require('graphql');
const { ApolloServer } = require('apollo-server-express');
const { connectDB } = require('./db.js');
const { Employee } = require("./model/employee")
const app = express();

connectDB();

// const employeesList = [{
//     id: 1, firstName: 'Harsh', lastName: 'Patel', age: 25,
//     dateOfJoining: new Date('2018-08-15'), title: 'Manager', department: 'Engineering', emplyeeType: 'Full-Time',
//     currentStatus: 1,
// }, {
//     id: 2, firstName: 'Bansu', lastName: 'Patel', age: 23,
//     dateOfJoining: new Date('2018-08-15'), title: 'Employee', department: 'Marketing', emplyeeType: 'Part-Time',
//     currentStatus: 0,
// },];

const getEmployees = async () => {
    const a = await Employee.find();
    // console.log({ a });
    return a;
};
const emplyeeAdd = async (parent, args, context, info) => {
    console.log({ args });
    const {
        firstName,
        lastName,
        age,
        dateOfJoining,
        employeeType,
        title,
        eStatus,
    } = args.employee;
    const employee = Employee({
        firstName,
        lastName,
        age,
        dateOfJoining,
        employeeType,
        title,
        eStatus: 1,
    });
    await employee.save();
    return employee;
}
let myownSQLSchema = `

type Employee {
    id: String
    firstName: String!
    lastName: String!
    age: String!
    dateOfJoining: String
    title: String!
    department:String
    employeeType:String!
    eStatus:Int
}

input EmployeeInputs{
    id: String
    firstName: String!
    lastName: String!
    age: String!
    dateOfJoining: String
    title: String!
    department:String
    employeeType:String!
    eStatus:Int
}

##### Top Level declarations
type Query {
    employeeList: [Employee!]!
}
type Mutation {
    emplyeeAdd(employee: EmployeeInputs!): Employee
}`;

const resolvers = {
    Query: {
        employeeList: getEmployees
    },
    Mutation: {
        emplyeeAdd: async (parent, args, context, info) => {
            console.log({ args });
            const {
                firstName,
                lastName,
                age,
                department,
                dateOfJoining,
                employeeType,
                title,
                eStatus,
            } = args.employee;
            const employee = Employee({
                firstName,
                lastName,
                age,
                department,
                dateOfJoining,
                employeeType,
                title,
                eStatus: 1,
            });
            await employee.save();
            return employee;
        }
    }
};

app.use(express.static('public'));


app.listen(3000, function () {
    console.log('App started on port 3000');
});


const server = new ApolloServer({
    typeDefs: myownSQLSchema,
    resolvers,
});

server.start().then(res => {
    server.applyMiddleware({ app, path: '/graphql' });
    app.listen({ port: 4001 }, () => console.log('Now browse to http://localhost:4001' + server.graphqlPath))
})
