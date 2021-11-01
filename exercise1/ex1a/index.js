const Employee = require("./employee.model");

const employee = new Employee("CAIRNS", 44, 5.0);

employee.calculatePay();

console.log(employee);
