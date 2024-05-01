// Rounding number to an  integer
let num1 = 5.618345;
console.log(`Round: ${Math.round(num1)}`); // normal rounding up
console.log(`Ceiling: ${Math.ceil(num1)}`); // first number past the value
console.log(`Floor: ${Math.floor(num1)}`); // first number before the value


// Fixed
let fixed = num1.toFixed(3); // return only 3 decimals
console.log(`Fixed Type: ${typeof(fixed)} Fixed Value: ${fixed}`); // a string type is returned

// Display in locale-specific format
let num2 = 1_000_000;
console.log(`USA: ${num2.toLocaleString('en-US')}`);
console.log(`Greece: ${num2.toLocaleString('el-EL')}`);

//Intl Format Currency
let salary = 100000;
let monthlySalary = salary / 12;
console.log(`Monthly Salary: ${monthlySalary.toFixed(2)}`); // this is indicating we only want 2 numbers after the decimal

let formatter1 = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}); // converting to a specific country currency
console.log(`Monthly Salary in US Currency: ${formatter1.format(monthlySalary)}`);

let formatter2 = new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'EUR'});
console.log(`EUR: ${formatter2.format(monthlySalary)}`);

let formatter3 = new Intl.NumberFormat('ja-JA', {style: 'currency', currency: 'JPY'});
console.log(`YEN: ${formatter3.format(monthlySalary)}`);
