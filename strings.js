// Creating single-line strings
let firstName = "Dylan";
let lastName = 'Walton';
let title = `Genius`;

//  String concatenation with the plus operator
let fullName = firstName + " " + lastName;

// String concatenation with template literals
fullName = `${firstName} ${lastName}`;
console.log(fullName);

// Creating multi-line strings with \n
let bio = "Line 1\nLine 2\nLine 3";
console.log(bio);

// Creating multi-line strings with backticks
bio = ` About Will Walton:
Frontend Web Developer`;

// Escaping characters
let quote = 'Some once said, "Make everyday count."';
quote = "Someone once said, \"Make everyday count.\"";

// String length
let length = quote.length;
console.log(`Quote Length: ${length}`);

// Accessing specific characters
let secondCharacter = quote[1];
console.log(`Second Character: ${secondCharacter}`);

// Changing case
let uppercaseName = fullName.toUpperCase();
console.log(uppercaseName);
let lowercaseName = fullName.toLowerCase();
console.log(lowercaseName);

// Finding a substring
let idx1 = fullName.indexOf("Dyl");
console.log(`Index 1: ${idx1}`);
let idx2 = fullName.indexOf("ton");
console.log(`Index 2: ${idx2}`);
// indexOf a value that doesn't exist
let idx3 = fullName.indexOf("xyz");
console.log(`Index 3: ${idx3}`); // -1 (didn't find it)
