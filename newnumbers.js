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
