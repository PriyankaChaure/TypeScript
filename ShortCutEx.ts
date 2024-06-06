class Employee
{
    constructor(private EmployeeId:number,private EmployeeName:string,private EmailId:string,private MobileNo:number,private EmployeeSalary:number){}
    display():void
    {
        console.log(this.EmployeeId);
        console.log(this.EmployeeName);
        console.log(this.EmailId);
        console.log(this.MobileNo);
        console.log(this.EmployeeSalary);
    }
}
let e=new Employee(1,"Sneha","sneha@gmail.com",1234567890,90000);
e.display();