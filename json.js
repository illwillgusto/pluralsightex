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
