// Creating dates
let date1 = new Date("2024-04-30");
console.log(date1);
let date2 = new Date("April 29, 2024");
console.log(date2);
let date3 = new Date(); // now
console.log(date3);
let date4 = new Date(2024, 3, 29, 2, 23, 45);
console.log(date4);

// Accessing elements from a date
console.log(`Full Year: ${date4.getFullYear()}`);
console.log(`Full Month: ${date4.getMonth()}`);
console.log(`Full Day: ${date4.getDay()}`);
