const express = require('express');
const { buildSchema } = require("graphql");
const fs = require("fs");
const { GraphQLScalarType } = require('graphql');
const { ApolloServer, UserInputError } = require('apollo-server-express');
const { connectDB } = require('./db.js');
const { Employee } = require("./model/employee");
require('dotenv').config();

const enableCors = (process.env.ENABLE_CORS || 'true') == 'true';
console.log('CORS setting:', enableCors);

const app = express();

connectDB();

const GraphQLDate = new GraphQLScalarType({
    name: 'GraphQLDate',
    description: 'A Date() type in GraphQL as a scalar',
    parseValue(dateOfJoining) {
        let dateValue = new Date(dateOfJoining);
        return dateValue;
    },
});

const getEmployees = async () => {
    const emListFromDb = await Employee.find();
    return emListFromDb;
};

const addEmployees = async (parent, args, context, info) => {
    console.log(args.employee);

    const newEmployeeDetails = args.employee;

    checkEmployeeValidation(newEmployeeDetails);
    newEmployeeDetails.dateOfJoining = new Date();
    const {
        firstName,
        lastName,
        age,
        dateOfJoining,
        title,
        department,
        employeeType,
        currentStatus,
    } = args.employee;
    const employee = Employee({
        firstName,
        lastName,
        age,
        dateOfJoining,
        title,
        department,
        employeeType,
        currentStatus: 1,
    });

    await employee.save();
    return employee;
}

function checkEmployeeValidation(newEmployee) {
    const errors = [];
    if (newEmployee.firstName.length < 2) {
        errors.push('You must have to enter the first name of Employee properly!! ');
    }

    if (newEmployee.lastName.length < 2) {
        errors.push('You must have to enter the last name of Employee properly!! ');
    }

    if (isNaN(newEmployee.age)) {
        errors.push('You must have to enter the age of Employee!! ');
    };

    if (newEmployee.age < 20 || newEmployee.age > 70) {
        errors.push('Employee is eligable to work only if their age is between 20 years and 70 years!! ')
    }
    console.log(errors);
    if (errors.length > 0) {
        throw new UserInputError('Invalid inputs enterd !! ', { errors })
    }
}

const resolvers = {
    Query: {
        employeeList: getEmployees
    },
    Mutation: {
        emplyeeAdd: addEmployees
    },
    GraphQLDate,
};



const server = new ApolloServer({
    typeDefs: fs.readFileSync('./schema.graphql').toString(),
    resolvers,
    formatError: error => {
        console.log("User Input errors");
        console.log(error);
        console.log("User Input errors");
        return error;
    }
});

const port = process.env.API_SERVER_PORT || 3000;

server.start().then(res => {
    server.applyMiddleware({ app, path: '/graphql' });
    app.listen(port, () => console.log('Now browse API to http://localhost:3000' + server.graphqlPath))
})