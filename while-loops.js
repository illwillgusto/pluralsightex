// Array of Complex Objects
import employees from "./data.json" assert { type: 'json' }

// Basic while loop
let i = 0;
while (employees[i]) {
  console.log(`Name: ${employees[i].firstName} ${employees[i].lastName}`);
  i++;
}
