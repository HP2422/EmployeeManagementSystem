/* globals React */
import React from 'react';
import graphQLFetch from './components/graphQLFetch.js';
import EmployeeTable from './EmployeeTable.jsx';
import EmployeeSearch from './EmployeeSearch.jsx';
import EmployeeCreate from './EmployeeCreate.jsx';

export default class EmployeeDirectory extends React.Component {

    constructor() {
        super();
        this.state = { employee: [] };
        this.a_Employee = this.a_Employee.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    async loadData() {
        const query = `query {
                firstName,
                lastName,
                age,
                dateOfJoining,
                title,
                department,
                employeeType,
                currentStatus
            }
            }`;


        const response = await graphQLFetch(query, { employee });
        const result = await response.json();
        this.setState({ employee: result.data.employeeList });
    }

    async a_Employee(employee) {
        // console.log('Creating employee !!');
        const query = `mutation emplyeeAdd($employee: EmployeeInputs!) {
            emplyeeAdd(employee: $employee) {
              firstName
              lastName
              age
              title
              department
              employeeType
            }
          }`;
        let data = await graphQLFetch(query, { employee });
        if (data) {
            this.loadData();
        }
    }
    render() {
        return (
            <React.Fragment>
                <h3>Employee Directory is Called.</h3>
                <EmployeeSearch />
                <EmployeeTable employees={this.state.employee} />
                <EmployeeCreate a_Employee={this.a_Employee} />
            </React.Fragment>
        );
    }
}