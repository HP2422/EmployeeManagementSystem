/* globals React PropTypes */
import graphQLFetch from './components/graphQLFetch.js';
import React from 'react';
import PropTypes from 'prop-types';

export default class EmployeeCreate extends React.Component {
    constructor() {
        super();
        this.handleAddEmployee = this.handleAddEmployee.bind(this);
    }
    handleAddEmployee(e) {
        console.log('Adding Employes');
        e.preventDefault();
        const form = document.forms.addEmployeeForm;
        const employee = {
            firstName: form.firstName.value, lastName: form.lastName.value,
            age: form.age.value,
            // dateOfJoining: form.dateOfJoining.value,
            title: form.title.value, department: form.department.value,
            employeeType: form.employeeType.value, currentStatus: 1
        };
        this.props.a_Employee(employee);
        form.firstName.value = "";
        form.lastName.value = "";
        form.age.vlaue = "";
        form.dateOfJoining.vlaue = "";
        form.title.vlaue = "";
        form.department.vlaue = "";
        form.employeeType.vlaue = "";
    }
    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
                <form name="addEmployeeForm" onSubmit={this.handleAddEmployee}>
                    <h3>Employee Add is Called.</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="firstName" className="form-label">First Name</label> :-
                            <input type="text" className="form-control" id="firstName" name="firstName" placeholder="First Name" required />
                        </div>
                        <br />
                        <div className="col-md-6">
                            <label htmlFor="lastName" className="form-label">Last Name</label> :-
                            <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Last Name" required />
                        </div>
                        <br />
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="age" className="form-label">Age</label> :-
                            <input type="number" className="form-control" id="age" name="age" placeholder="Age" required />
                        </div>
                        <br />
                        {/* <div className="col-md-6">
                            <label htmlFor="dateOfJoining" className="form-label">Date of Joining</label> :-
                            <input type="date" className="form-control" id="dateOfJoining" name="dateOfJoining" placeholder="Date Of Joining" required />
                        </div> */}
                        <br />
                        <br />
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <br />
                            <label htmlFor="title" className="form-label">Title</label> :-
                            <select className="form-select" id="title" name="title" placeholder="Title" required>
                                <option value="Employee">Employee</option>
                                <option value="Manager">Manager</option>
                                <option value="Director">Director</option>
                                <option value="VicePrecident">Vice Precident</option>
                            </select>
                        </div>
                        <br />
                        <div className="col-md-6">
                            <br />
                            <label htmlFor="department" className="form-label">Department</label> :-
                            <select className="form-select" id="department" name="department" required>
                                <option value="It">Information and technology</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Hr">HR</option>
                                <option value="Engineering">Engineering</option>
                            </select>
                        </div>
                        <br />
                        <br />
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="employeeType" className="form-label">Employee Type</label> :-
                            <select className="form-select" id="employeeType" name="employeeType" required>
                                <option value="Full-Time">Full Time</option>
                                <option value="Part-Time">Part Time</option>
                                <option value="ContractBase">Contract Base</option>
                                <option value="Seasonal">Seasonal</option>
                            </select>
                        </div>
                        <input hidden type="number" id="currentStatus" name="currentStatus" readOnly value="1" />
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn btn-outline-primary">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}