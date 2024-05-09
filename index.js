// Import Sample Data
import employees from './data.json' assert { type: 'json' }

import createPrompt from 'prompt-sync';
let prompt = createPrompt();

const logEmployee = (employee) => {
  Object.entries(employee).forEach(entry => {
    console.log(`${entry[0]}: ${entry[1]}`);
  });
}

function getInput(promptText, validator, transformer) {
  let value = prompt(promptText);
  if (validator && !validator(value)) {
    console.error(`--Invalid input`);
    process.exit(1);
  }
  if (transformer) {
    return transformer(value);
  }
  return value;
}


// Validator functions ---------------------------------------------

const isStringInputValid = (input) => {
  return (input) ? true : false;
}
const isBooleanInputValid = function (input) {
  return (input === "yes" || input === "no");
}

const isStartYearValid = function (input) {
  let numValue = Number(input);
  if (!Number.isInteger(numValue) || numValue < 1990 || numValue > 2024) {
    return false;
  }
  return true;
}

const isStartMonthValid = function (input) {
  let numValue = Number(input);
  if (!Number.isInteger(numValue) || numValue < 1 || numValue > 12) {
    return false;
  }
  return true;
}

const isStartDayValid = function (input) {
  let numValue = Number(input);
  if (!Number.isInteger(numValue) || numValue < 1 || numValue > 31) {
    return false;
  }
  return true;
}

// Application commands

function listEmployees() {
  console.log(`Employee List ----------------------------`);
    console.log('');

    employees.forEach(e => {
      logEmployee(e);
      prompt('Press enter to continue...');
    });
    console.log(`Employee list completed`);
}

function addEmployee() {
  console.log(`Add Employee -----------------------------`);
    console.log('');
    let employee = {};
    employee.firstName = getInput("First Name: ", isStringInputValid);
    employee.lastName = getInput("Last Name: ", isStringInputValid);
    let startDateYear = getInput("Employee Start Year (1990-2024): ", isStartYearValid);
    let startDateMonth = getInput("Employee Start Date Month (1-12): ", isStartMonthValid);
    let startDateDay = getInput("Employee Start Date Day (1-31): ", isStartDayValid);
    employee.startDate = new Date(startDateYear, startDateMonth - 1, startDateDay);
    employee.isActive = getInput("Is employee active (yes or no): ", isBooleanInputValid, i => (i === "yes"));


    // Output Employee JSON
    const json = JSON.stringify(employee, null, 2);
    console.log(`Employee: ${json}`);
}

// Search for employees by id
function searchById() {
  const id = getInput("Employee ID: ", null, Number);
  const result = employees.find(e => e.id === id);
  if (result) {
    console.log("");
    logEmployee(result);
  } else {
    console.log("No results...");
  }
}

// Search for employees by name
function searchByName() {
  const firstNameSearch = getInput("First Name: ").toLowerCase();
  const lastNameSearch = getInput("Last Name: ").toLowerCase();

}
// Application execution

// Get the command the user wants to execute
const command = process.argv[2].toLowerCase();

switch (command) {

  case 'list':
    listEmployees();
    break;

  case 'add':
    addEmployee();
    break;

  case 'search-by-id':
    searchById();
    break;

  case 'search-by-name':
    searchByName();
    break;

  default:
    console.log('Unsupported command. Exiting...');
    process.exit(1);

}
