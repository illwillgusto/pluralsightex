// Creating an object
const obj1 = {
  firstName: "David",
  lastName: "Tucker"
};

// Creating a Map
const map1 = new Map();
map1.set("firstName", "David"); /* with the set method for adding values to the Map method you are
passing through the key and the set value for that key */
map1.set("lastName", "Tucker");
console.log(map1);

// Using Non-string keys, which can be done in Maps but not in Objects
map1.set(new Date().getTime(), "Number key"); // number key
map1.set([], "Array key"); // array key
map1.set(() => "Hi", "Function key"); // function key
console.log(map1);

//Checking the size
console.log(`Map size: ${map1.size}`); // size method

// Accessing values
console.log(map1.get("lastName")); //using the get method then pass in whatever key we want to access
console.log(map1.get([])); // undefined

// Delete values
map1.delete("firstName"); // use the delete method and pass in the key we want the value deleted for
console.log(`Map size: ${map1.size}`); // 4 
