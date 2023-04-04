import React from "react";

class EmployeeFilter extends React.Component {
  handleFilterClick = (eType) => {
    window.location.href = `/#/employeeDirectory?eType=${eType}`;
    window.location.reload();
  };

  render() {
    return (
      <div>
        <a
          href="/#/employeeDirectory"
          onClick={() => this.handleFilterClick("")}
        >
          All Employees
        </a>
        {" | "}
        <a
          href="/#/employeeDirectory?eType=Full-Time"
          onClick={() => this.handleFilterClick("Full-Time")}
        >
          Full-Time Employees
        </a>
        {" | "}
        <a
          href="/#/employeeDirectory?eType=Part-Time"
          onClick={() => this.handleFilterClick("Part-Time")}
        >
          Part-Time Employees
        </a>
        {" | "}
        <a
          href="/#/employeeDirectory?eType=ContractBase"
          onClick={() => this.handleFilterClick("ContractBase")}
        >
          Contract Base Employees
        </a>
        {" | "}
        <a
          href="/#/employeeDirectory?eType=Seasonal"
          onClick={() => this.handleFilterClick("Seasonal")}
        >
          Seasonal Employees
        </a>
      </div>
    );
  }
}

export default EmployeeFilter;
