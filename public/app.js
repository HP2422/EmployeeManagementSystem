class EmployeeDirectory extends React.Component {
  constructor() {
    super();
    this.state = {
      emplyee: []
    };
    this.a_Employee = this.a_Employee.bind(this);
  }
  componentDidMount() {
    this.loadData();
  }
  async loadData() {
    // setTimeout(() => {
    //     this.setState({ emplyee: employeesList });
    // }, 5000);
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
                eStatus
            }
            }`;
    const response = await fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query
      })
    });
    const result = await response.json();
    // console.log({ result });
    this.setState({
      emplyee: result.data.employeeList
    });
  }
  async a_Employee(employee) {
    // const new_emp = this.state.emplyee.slice();
    // new_emp.push(emp);
    // this.setState({ emplyee: new_emp });
    // console.log('Creating Emplyee !!');
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
    const response = await fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query,
        variables: {
          employee
        }
      })
    });
    this.loadData();
  }
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Employee Directory is Called."), /*#__PURE__*/React.createElement(EmployeeSearch, null), /*#__PURE__*/React.createElement(EmployeeTable, {
      employees: this.state.emplyee
    }), /*#__PURE__*/React.createElement(EmployeeCreate, {
      a_Employee: this.a_Employee
    }));
  }
}
class EmployeeCreate extends React.Component {
  addEmployee = e => {
    console.log('Adding Employes');
    e.preventDefault();
    const form = document.forms.emplyeeAdd;
    const employee = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      age: form.age.value,
      dateOfJoining: form.dateOfJoining.value,
      title: form.title.value,
      department: form.department.value,
      employeeType: form.employeeType.value,
      eStatus: 1
    };
    this.props.a_Employee(employee);
    form.firstName.value = "";
    form.lastName.value = "";
    form.age.vlaue = "";
    form.dateOfJoining.vlaue = "";
    form.title.vlaue = "";
    form.department.vlaue = "";
    form.employeeType.vlaue = "";
  };
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("link", {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css",
      integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
      crossOrigin: "anonymous"
    }), /*#__PURE__*/React.createElement("form", {
      name: "emplyeeAdd",
      onSubmit: this.addEmployee
    }, /*#__PURE__*/React.createElement("h3", null, "Employee Add is Called."), /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-md-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "firstName",
      className: "form-label"
    }, "First Name"), " :-", /*#__PURE__*/React.createElement("input", {
      type: "text",
      className: "form-control",
      id: "firstName",
      name: "firstName",
      placeholder: "First Name",
      required: true
    })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
      className: "col-md-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "lastName",
      className: "form-label"
    }, "Last Name"), " :-", /*#__PURE__*/React.createElement("input", {
      type: "text",
      className: "form-control",
      id: "lastName",
      name: "lastName",
      placeholder: "Last Name",
      required: true
    })), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-md-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "age",
      className: "form-label"
    }, "Age"), " :-", /*#__PURE__*/React.createElement("input", {
      type: "text",
      className: "form-control",
      id: "age",
      name: "age",
      placeholder: "Age",
      required: true
    })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
      className: "col-md-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "dateOfJoining",
      className: "form-label"
    }, "Date of Joining"), " :-", /*#__PURE__*/React.createElement("input", {
      type: "date",
      className: "form-control",
      id: "dateOfJoining",
      name: "dateOfJoining",
      placeholder: "Date Of Joining",
      required: true
    })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-md-6"
    }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
      htmlFor: "title",
      className: "form-label"
    }, "Title"), " :-", /*#__PURE__*/React.createElement("select", {
      className: "form-select",
      id: "title",
      name: "title",
      placeholder: "Title",
      required: true
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Select Title Type"), /*#__PURE__*/React.createElement("option", {
      value: "Employee"
    }, "Employee"), /*#__PURE__*/React.createElement("option", {
      value: "Manager"
    }, "Manager"), /*#__PURE__*/React.createElement("option", {
      value: "Director"
    }, "Director"), /*#__PURE__*/React.createElement("option", {
      value: "VicePrecident"
    }, "Vice Precident"))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
      className: "col-md-6"
    }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
      htmlFor: "department",
      className: "form-label"
    }, "Department"), " :-", /*#__PURE__*/React.createElement("select", {
      className: "form-select",
      id: "department",
      name: "department",
      required: true
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Select Department Type"), /*#__PURE__*/React.createElement("option", {
      value: "It"
    }, "Information and technology"), /*#__PURE__*/React.createElement("option", {
      value: "Marketing"
    }, "Marketing"), /*#__PURE__*/React.createElement("option", {
      value: "Hr"
    }, "HR"), /*#__PURE__*/React.createElement("option", {
      value: "Engineering"
    }, "Engineering"))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-md-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "employeeType",
      className: "form-label"
    }, "Employee Type"), " :-", /*#__PURE__*/React.createElement("select", {
      className: "form-select",
      id: "employeeType",
      name: "employeeType",
      required: true
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Select Employee Type"), /*#__PURE__*/React.createElement("option", {
      value: "Full-Time"
    }, "Full Time"), /*#__PURE__*/React.createElement("option", {
      value: "Part-Time"
    }, "Part Time"), /*#__PURE__*/React.createElement("option", {
      value: "Contract Base"
    }, "Contract Base"), /*#__PURE__*/React.createElement("option", {
      value: "Seasonal"
    }, "Seasonal"))), /*#__PURE__*/React.createElement("input", {
      hidden: true,
      type: "number",
      id: "eStatus",
      name: "eStatus",
      readOnly: true,
      value: "1"
    })), /*#__PURE__*/React.createElement("div", {
      className: "text-center"
    }, /*#__PURE__*/React.createElement("button", {
      type: "submit",
      className: "btn btn-outline-primary"
    }, "Submit"))));
  }
}
class EmployeeRow extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null), /*#__PURE__*/React.createElement("td", null, this.props.employee.firstName), /*#__PURE__*/React.createElement("td", null, this.props.employee.lastName), /*#__PURE__*/React.createElement("td", null, this.props.employee.age), /*#__PURE__*/React.createElement("td", null, this.props.employee.dateOfJoining), /*#__PURE__*/React.createElement("td", null, this.props.employee.title), /*#__PURE__*/React.createElement("td", null, this.props.employee.department), /*#__PURE__*/React.createElement("td", null, this.props.employee.employeeType), /*#__PURE__*/React.createElement("td", null, this.props.employee.eStatus));
  }
}
class EmployeeTable extends React.Component {
  render() {
    const allRows = this.props.employees.map(employee => /*#__PURE__*/React.createElement(EmployeeRow, {
      key: employee.id,
      employee: employee
    }));
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Employee Table is Called."), /*#__PURE__*/React.createElement("h5", {
      className: "text-center"
    }, "List Of Employees"), /*#__PURE__*/React.createElement("table", {
      className: "table table-striped text-capitalize"
    }, /*#__PURE__*/React.createElement("thead", {
      className: "thead-dark"
    }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Id"), /*#__PURE__*/React.createElement("th", null, "First Name"), /*#__PURE__*/React.createElement("th", null, "Last Name"), /*#__PURE__*/React.createElement("th", null, "Age"), /*#__PURE__*/React.createElement("th", null, "Date Of Joining"), /*#__PURE__*/React.createElement("th", null, "Title"), /*#__PURE__*/React.createElement("th", null, "Department"), /*#__PURE__*/React.createElement("th", null, "Emplyee Type"), /*#__PURE__*/React.createElement("th", null, "Current Status"))), /*#__PURE__*/React.createElement("tbody", null, allRows)));
  }
}
class EmployeeSearch extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Employee Search is Called."));
  }
}
ReactDOM.render( /*#__PURE__*/React.createElement(EmployeeDirectory, null), document.getElementById('contents'));