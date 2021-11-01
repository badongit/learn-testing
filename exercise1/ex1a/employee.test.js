const Employee = require("./employee.model");

describe("Test method calculate pay of class Employee", () => {
  const expectedResults = [
    {
      name: "ADAMS",
      hoursWorked: 35,
      hourlyRate: 5.0,
      grossPay: 175.0,
      tax: 0,
      netPay: 175.0,
    },
    {
      name: "BAKER",
      hoursWorked: 40,
      hourlyRate: 5.0,
      grossPay: 200.0,
      tax: 0,
      netPay: 200.0,
    },
    {
      name: "CAIRNS",
      hoursWorked: 44,
      hourlyRate: 5.0,
      grossPay: 230.0,
      tax: 6.0,
      netPay: 224.0,
    },
    {
      name: "DONALD",
      hoursWorked: 20,
      hourlyRate: 6.0,
      grossPay: 120.0,
      tax: 0,
      netPay: 120.0,
    },
  ];

  test.each(expectedResults)(
    "Calculate pay of $name",
    ({ name, hoursWorked, hourlyRate, grossPay, tax, netPay }) => {
      const employee = new Employee(name, hoursWorked, hourlyRate);
      employee.calculatePay();

      expect(employee.grossPay).toEqual(grossPay);
      expect(employee.tax).toEqual(tax);
      expect(employee.netPay).toEqual(netPay);
    }
  );
});
