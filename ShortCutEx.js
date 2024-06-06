var Employee = /** @class */ (function () {
    function Employee(EmployeeId, EmployeeName, EmailId, MobileNo, EmployeeSalary) {
        this.EmployeeId = EmployeeId;
        this.EmployeeName = EmployeeName;
        this.EmailId = EmailId;
        this.MobileNo = MobileNo;
        this.EmployeeSalary = EmployeeSalary;
    }
    Employee.prototype.display = function () {
        console.log(this.EmployeeId);
        console.log(this.EmployeeName);
        console.log(this.EmailId);
        console.log(this.MobileNo);
        console.log(this.EmployeeSalary);
    };
    return Employee;
}());
var e = new Employee(1, "Sneha", "sneha@gmail.com", 1234567890, 90000);
e.display();
