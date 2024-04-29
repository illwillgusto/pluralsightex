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


