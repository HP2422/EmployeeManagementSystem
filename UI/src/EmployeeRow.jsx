/* globals React */
import React from 'react';
import graphqlFetch from './components/graphqlFetch';
export default class EmployeeRow extends React.Component {

    constructor() {
        super();
        this.deleteEmployee = this.deleteEmployee.bind(this);
      }
    
      async deleteEmployee(id) {
        const confirmed = window.confirm(
          "Are you sure you want to delete this employee? "
        );
        if (!confirmed) {
          return;
        }
    
        const query = `mutation EmployeeDelete($id: String) {
            employeeDelete(id: $id) {
              id
            }
          }`;
    
        const data = await graphqlFetch(query, { id });
        alert("Employee deleted successfully.");
          location.reload();
        // if (data && data.deleteEmployee) {
        //   alert("Employee deleted successfully.");
        //   location.reload();
        // } else {
        //   alert("Failed to delete employee.");
        // }
      }
    
    render() {
        console.log(this.props.employee);
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
                <td><a href={`/#/employeeEdit/${this.props.employee.id}`}>Edit</a></td>
                {/* <td><a href={`/#/employeeDelete/${this.props.employee.id}`}>Delete</a></td> */}
                <td>
            <a
              href="/#/employeeDirectory"
              value={this.props.employee.id}
              onClick={() => this.deleteEmployee(this.props.employee.id)}
            >
              Delete
            </a>
          </td>
                {/* <td><button className='edit-button'><a href={`/#/edit/${this.props.employee.id}`}>Edit</a>Edit</button> ||
                    <button className='delete-button'>Delete</button></td> */}
            </tr>
        )
    }
}