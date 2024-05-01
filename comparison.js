// Greater than and less that with numbers
let val1 = (7 > 5);
console.log(val1);

// Equality
let val3 = (3 === 3); // strict ===
console.log(val3);
let val4 = (true === false);
console.log(val4);
let val5 = ("Hi" !== "hi"); // not equal syntax !==
console.log(val5);

// Primitive equality (passed by value)
let str1 = "Hello";
let str2 = "Hello";
let val6 = (str1 === str2);
console.log(val6);

//Object equality (passed by reference)
let obj1 = {};
let obj2 = {};
let val7 = (obj1 === obj2);
console.log(val7); // false, because obj1 is pulling from one block memory and obj2 is pulling from a different block memory

let obj3 = obj2;
let val8 = (obj2 === obj3);
console.log(val8); // true, objs are pointing to the same block of memory

// Strict equality vs equality
let val9 = ('42' == 42);
let val10 = ('42' === 42);
console.log(`val9: ${val9} val10: ${val10}`);

