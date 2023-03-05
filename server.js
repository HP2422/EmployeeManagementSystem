const express = require('express');
const { buildSchema } = require("graphql");
const { GraphQLScalarType } = require('graphql');
const { ApolloServer } = require('apollo-server-express');
const { connectDB } = require('./db.js');
const { Employee } = require("./model/employee")
const fs = require("fs");
const app = express();

connectDB();

const getEmployees = async () => {
    const emListFromDb = await Employee.find();
    return emListFromDb;
};

const addEmployees = async (parent, args, context, info) => {
    console.log({ args });
    const {
        firstName,
        lastName,
        age,
        dateOfJoining,
        employeeType,
        title,
        currentStatus,
    } = args.employee;
    const employee = Employee({
        firstName,
        lastName,
        age,
        dateOfJoining,
        employeeType,
        title,
        currentStatus: 1,
    });
    await employee.save();
    return employee;
}

const resolvers = {
    Query: {
        employeeList: getEmployees
    },
    Mutation: {
        emplyeeAdd: addEmployees
    }
};

app.use(express.static('public'));

app.listen(3000, function () {
    console.log('App started on port 3000');
});

const server = new ApolloServer({
    typeDefs: fs.readFileSync('./public/schema.graphql').toString(),
    resolvers,
});

server.start().then(res => {
    server.applyMiddleware({ app, path: '/graphql' });
    app.listen({ port: 4001 }, () => console.log('Now browse to http://localhost:4001' + server.graphqlPath))
})