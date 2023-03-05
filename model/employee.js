const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const EmployeeSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: String,
    dateOfJoining: String,
    title: String,
    department: String,
    employeeType: String,
    currentStatus: String,
});
const Employee = mongoose.model("employeeSchema", EmployeeSchema);
module.exports = { Employee }