// Using conditionals


// Employee
let employee = {
  firstName: "Will",
  lastName: "Walton",
  startDate: new Date(2024, 5, 13),
  numYearsService: 1,
  isActive: true,
  department: "Engineering",
  title: "Solutions Engineer"
};

// Badge Color with employee object
let badgeColor;

if (employee.numYearsService < 5) {
  employee.badgeColor = "blue";
} else if (employee.numYearsService < 10) {
  employee.badgeColor = "yellow";
} else if (employee.numYearsService < 15) {
  employee.badgeColor = "black";
} else if (employee.numYearsService < 20) {
  employee.badgeColor = "silver";
} else {
  employee.badgeColor = "gold";
}
console.log(`Years: ${employee.numYearsService} Badge Color: ${employee.badgeColor}`);


// Evaluating multiple conditions for truthyness in all conditions
if(employee.numYearsService < 5 && employee.department === "Engineering") {
  console.log(`Employee meets criteria`);
}

// Evaluating multiple conditions for truthyness in one or more conditions
if(employee.numYearsService > 1 || employee.title.startsWith("Solutions")) {
  console.log(`Employee meets criteria`);
}

// Evaluating for a condition to NOT be true
if(employee.numYearsService > 20 && !employee.isActive) {
  console.log(`Employee is retiring soon with full retirement benefits`);
}

// Using the ternary operator (? :)
if(employee.numYearsService > 10) {
  employee.annualBonus = 2500;
} else {
  employee.annualBonus = 1500;
}

employee.annualBonus = (employee.numYearsService > 10) ? 2500 : 1500; // ? = then : = else
