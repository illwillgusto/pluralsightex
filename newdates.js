// Create a date
let date1 = new Date("2024-05-31, 14:23:02-5:00");
console.log(`Date 1: ${date1}`);

// Display just the calendar date
console.log(`Calendar Date: ${date1.toDateString()}`); // this method will give the date, and exact day

// Display a locale-specific date string
console.log(`Local en-US: ${date1.toLocaleDateString('en-US')}`);
console.log(`Locale en-GB: ${date1.toLocaleDateString('en-GB')}`);
console.log(`Locale ja-JP: ${date1.toLocaleDateString('ja-JP')}`);

//Display just the time
console.log(`Date Time: ${date1.toTimeString()}`);

// Display a locale-specific time string
console.log(`Locale en-US: ${date1.toLocaleTimeString('en-US')}`);
console.log(`Locale en-GB: ${date1.toLocaleTimeString('en-GB')}`);
console.log(`Locale ja-JP: ${date1.toLocaleTimeString('ja-JP')}`);
