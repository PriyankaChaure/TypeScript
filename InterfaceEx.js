function StudentDetails(s) {
    console.log("Roll No:" + s.RollNo);
    console.log("Student Name:" + s.StudentName);
    console.log("Email Id:" + s.EmailId);
    console.log("Mobile No:" + s.MobileNo);
}
var s1 = { RollNo: 1, StudentName: "Priyanka", EmailId: "priya@gmail.com", MobileNo: 1234567890 };
StudentDetails(s1);
