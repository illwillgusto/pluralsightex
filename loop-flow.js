// Array of Complex Object
import employees from "./data.json" assert { type: 'json' }

// Listing only the first 5 items
for (let i = 0; i < employees.length; i++) {
  if (i === 5) {
    break;
  }
  console.log(`Name: ${employees[i].firstName} ${employees[i].lastName}`);
}

console.log('-----');

// Searching only for first names that start with 'B'
for (let employee of employees) {
  if (!employee.firstName.startsWith('B')) {
    continue; // this means we are going to stop the current iteration but will immediately move to the next iteration
  }
  console.log(`Name: ${employee.firstName} ${employee.lastName}`);
}

// Nested Loop Control Flow
employee: for (let emp of employees) {
  for (let property in emp) {
    if (property === "dateBirth") {
      continue employee;
    }
    console.log(`${property}: ${emp[property]}`);
  }
  console.log('---');
}
