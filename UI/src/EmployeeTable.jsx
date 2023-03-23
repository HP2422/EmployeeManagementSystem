/* globals React */
import React from 'react';
import EmployeeRow from "./EmployeeRow.jsx";
export default class EmployeeTable extends React.Component {
    render() {
        const allRows = this.props.employees.map((employee, index) => (
            <EmployeeRow key={employee.id} index={index} employee={employee} />
        ));
        return (
            <React.Fragment>
                <h3>Employee Table is Called.</h3>
                <h5 className="text-center">List Of Employees</h5>
                <table className="table table-striped text-capitalize">
                    <thead className="thead-dark">
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Date Of Joining</th>
                            <th>Title</th>
                            <th>Department</th>
                            <th>Emplyee Type</th>
                            <th>Current Status</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allRows}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}