// Create an Object with an object literal (preferred)
let obj1 = {};

// Create an Object with a constructor
let obj2 = new Object();

// Populate properties on an object
obj1.firstName = "Dylan";
obj1.lastName = "Ray";
obj1.isActive = true;
obj1.startDate = new Date("April 29, 2024");
obj1.vacationDays = 26;
console.log(obj1);


// Populating an Object on creation with object literal syntax
let obj3 = {
  firstName: "Dyl",
  lastName: "Ray",
  isActive: true,
  startDate: new Date("April 29, 2024"),
  vacationDays: 26
};
console.log(obj3);

// Accessing properties from an object
console.log(`First Name: ${obj3.firstName}`);
console.log(`Last Name: ${obj3.lastName}`);
console.log(`Start Date: ${obj3["startDate"]}`);

// Deleting props from an object
delete obj3.vacationDays;
console.log(obj3);

// Accessing a property that doesn't exist
console.log(`Non-existent value: ${obj3.middleName}`);

// Objects are passed by reference, not value
let obj4 = obj3;
obj4.lastName = "Smith";
console.log(`Last Name (obj3): ${obj3.lastName}`); // obj3 and obj4 now point to the same block of memory once obj4 was declared
