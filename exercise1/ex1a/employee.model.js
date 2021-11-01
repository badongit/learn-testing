class Employee {
  constructor(name, hoursWorked, hourlyRate) {
    this.name = name;
    this.hoursWorked = hoursWorked;
    this.hourlyRate = hourlyRate;
    this.tax = 0;
  }

  calculatePay() {
    let payableHours;

    if (this.hoursWorked <= 40) {
      payableHours = this.hoursWorked;
    } else {
      payableHours = 40 + (this.hoursWorked - 40) * 1.5;
    }

    this.grossPay = payableHours * this.hourlyRate;

    if (this.grossPay > 200) {
      this.tax = (this.grossPay - 200) * 0.2;
    }

    this.netPay = this.grossPay - this.tax;
  }
}

module.exports = Employee;
