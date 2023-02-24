const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const EmployeeSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: String,
    dateOfJoining: String,
    department:String,
    employeeType: String,
    title: String,
    eStatus: String,
});
const Employee = mongoose.model("employeeSchema", EmployeeSchema);
module.exports = { Employee }