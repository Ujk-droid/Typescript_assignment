
let car: string = 'subaru';
let number: number = 10;
let colors: string[] = ['red', 'blue', 'green'];

// Tests for equality and inequality with strings
console.log("Equality test with strings:", car == 'subaru'); // True
console.log("Inequality test with strings:", car != 'honda'); // True

// Tests using the lower case function
console.log("Lowercase comparison:", car.toLowerCase() === 'subaru'); // True

// Numerical tests
console.log("Numerical equality test:", number === 10); // True
console.log("Numerical inequality test:", number !== 5); // True
console.log("Greater than test:", number > 5); // True
console.log("Less than test:", number < 15); // True
console.log("Greater than or equal to test:", number >= 10); // True
console.log("Less than or equal to test:", number <= 10); // True

// Tests using "and" and "or" operators
console.log("And operator test:", car === 'subaru' && number === 10); // True
console.log("Or operator test:", car === 'subaru' || number === 5); // True

// Test whether an item is in an array
console.log("Item in array test:", colors.includes('blue')); // True

// Test whether an item is not in an array
console.log("Item not in array test:", !colors.includes('yellow')); // True
