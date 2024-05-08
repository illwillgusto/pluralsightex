// Array of Complex Object
import employees from "./data.json" assert { type: 'json' }

// Listing only the first 5 items
for (let i = 0; i < employees.length; i++) {
  if (i === 5) {
    break;
  }
  console.log(`Name: ${employees[i].firstName} ${employees[i].lastName}`);
}

