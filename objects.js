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
