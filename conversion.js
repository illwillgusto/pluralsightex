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

// Converting a string to a number
let ageString = "21";
let ageNum = Number(ageString); // utilizing the number function
console.log(typeof(ageNum));
let ageNewNum = new Number(ageString); // You don't want this
console.log(typeof(ageNewNum)); // object


// What about NaN
let ageString2 = "forty-one";
let ageNum2 = Number(ageString2);
console.log(`Age String 2: ${ageNum2}`); // Age String 2: NaN
let isInvalid = isNaN(ageNum2);
console.log(`Is Invalid: ${isInvalid}`);

// Convert a value to a boolean
let num1 = 1;
let num2 = 0;
let bool1 = Boolean(num1); // true
let bool2 = Boolean(num2); // false
console.log(`Num1: ${num1} Num 2: ${num2}`);

let str1 = "Hello";
let bool3 = Boolean(str1);
let val1;
let bool4 = Boolean(val1);
console.log(`Bool 3: ${bool3} Bool 4: ${val1}`);


