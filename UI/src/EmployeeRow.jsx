/* globals React */
import React from 'react';
export default class EmployeeRow extends React.Component {
    render() {
        return (
            <tr >
                <td>{this.props.index + 1}</td>
                <td>{this.props.employee.firstName}</td>
                <td>{this.props.employee.lastName}</td>
                <td>{this.props.employee.age}</td>
                <td>{this.props.employee.dateOfJoining}</td>
                <td>{this.props.employee.title}</td>
                <td>{this.props.employee.department}</td>
                <td>{this.props.employee.employeeType}</td>
                <td>{this.props.employee.currentStatus == 1 ? "Working" : "Retired"}</td>
            </tr>
        )
    }
}