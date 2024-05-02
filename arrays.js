// creating arrays
let arr1 = []; // empty array
let arr2 = ["Item1", "Item2"];
let arr3 = new Array();
let arr4 = new Array("Item1", "Item2");

// Accessing values
let names = ["David", "Kim", "Steve", "Katie"];
console.log(`Names Length: ${names.length}`); // requesting the length of the array
console.log(`First Name: ${names[0]}`); // 0 is the first index so we will retrieve David
console.log(`Second Name: ${names[1]}`);
console.log(`Fifth Name: ${names[5]}`); // undefined because that value isn't defined within the array

// Searching for Values
const includesDavid = names.includes("David"); // includes method to give back a boolean
console.log(`Includes David: ${includesDavid}`);
const includesTucker = names.includes("Tucker");
console.log(`Includes Tucker: ${includesTucker}`);
const davidIndex = names.indexOf("David"); // indexOf method to find where a string is within an array
console.log(`David is where in the array: ${davidIndex}`);

// Adding value - at the end
names.push("Shawn"); // push method will push the value to the end of the array
console.log(names);

// Adding value - at the beginning
names.unshift("Sam"); // the unshift method will add a value to the beginning of the array
console.log(names);

// Adding value - at a specific index
names.splice(1, 0, "Will"); // the splice method allows you to added a value to a specific spot
// this is asking to add the value Will at the index position 1
console.log(names);

// Removing value - at the beginning
names.shift(); // the shift method takes the first value away from the array
console.log(names);

// Removing value - specific index
names.splice(5,1); //splice can also be used to remove values, notice the syntax
//^this syntax is removing the index 5, and just that 1 value, if we wanted more values taken we'd change the number 1
console.log(names);

// Arrays and objects
const obj1 = {
  firstName: "David",
  lastName: "Tucker"
};

const obj2 = {
  firstName: "Kim",
  lastName: "Porter"
};

const obj3 = {
  firstName: "David",
  lastName: "Tucker"
};

const employees = [obj1, obj2];
console.log(`Is the object in the array: ${employees.includes(obj3)}`);
console.log(`Is the object in the array: ${employees.includes(obj1)}`);
