// Using the typeof function
let strValue = "Hi";
console.log(typeof(strValue)); // string
let numValue = 1;
console.log(typeof(numValue)); // number
let boolValue = true;
console.log(typeof(boolValue)); // boolean

// Joining a non-string value with a string
let age = 21;
let firstName = "Bruce";
let description = `${firstName} is ${age} years old.`; // using temporal literals to combine the 2 to make a string
console.log(description);
console.log(typeof(description));
