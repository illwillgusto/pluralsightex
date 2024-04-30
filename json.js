// JS Object
let employee = {
  firstName: "Clark",
  lastName: "Kent",
  birthdate: new Date("December 17, 1987"),
  numYearsEmployment: 5,
  department: "Engineering",
  title: "Web Developer",
  isActive: true,
  salary: 150000
};

// Convert to JSON String
let jsonValue = JSON.stringify(employee); //this function will take any object you pass in and convert it into a JSON string
console.log(jsonValue);
jsonValue = JSON.stringify(employee, null, 2); // 2 spaces per inditation level
console.log(jsonValue);

// Convert Value Back to Object
let newEmployee = JSON.parse(jsonValue); // this method will take in your string and return an object
console.log(newEmployee); 
