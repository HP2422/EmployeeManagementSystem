class EmployeeDirectory extends React.Component {

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
            employeeList {
                id,
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
        const response = await fetch('/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query })
        });
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
        let response = await fetch('/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query, variables: { employee } })
        });
        console.log(response);
        let result = await response.json();
        if (result.errors[0].extensions.code === "BAD_USER_INPUT") {
            alert("Incorrect Data : " + result.errors[0].extensions.errors.join("\n"));
        }
        else {
            await this.loadData();
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

class EmployeeCreate extends React.Component {
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
                                <option value="Contract Base">Contract Base</option>
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

class EmployeeRow extends React.Component {
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

class EmployeeTable extends React.Component {
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

class EmployeeSearch extends React.Component {
    render() {
        return (
            <div>
                <h3>Employee Search is Called.</h3>
            </div>
        );
    }
}

ReactDOM.render(<EmployeeDirectory />, document.getElementById('contents'));