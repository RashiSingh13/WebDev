var employee={  
    EmpId: 123, 
    Name:"Rashi Singh",
    Age: 22,
    Salary: 70000,
    Dept: "Web Development"
};
console.log("Good Morning " +employee.Name+ ", Your id is " +employee.EmpId+ " from " +employee.Dept+ " and you have been offered Rs. " +employee.Salary
); //print the statement

delete  employee.Age;   //deletes the property
employee.newId=employee.EmpId
delete(employee.EmpId)
console.log(employee);


