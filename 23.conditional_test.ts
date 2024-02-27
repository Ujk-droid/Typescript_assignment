
let car: string = 'subaru';

// Test 1: Car is equal to 'subaru', so it should evaluate to true
console.log("Test 1:", car == 'subaru'); // True

// Test 2: Car is not equal to 'honda', so it should evaluate to false
console.log("Test 2:", car == 'honda'); // False

// Test 3: Car is not equal to 'Subaru' (case-sensitive comparison), so it should evaluate to false
console.log("Test 3:", car == 'Subaru'); // False

// Test 4: Car is not equal to 'Subaru' (case-sensitive comparison), so it should evaluate to false
console.log("Test 4:", car.toLowerCase() == 'subaru'); // True

// Test 5: Car is equal to 'subaru', so it should evaluate to true
console.log("Test 5:", car === 'subaru'); // True

// Test 6: Car is not strictly equal to 'subaru' (different data types), so it should evaluate to false
console.log("Test 6:", car === '5'); // False

// Test 7: Car is not strictly equal to 'subaru' (different data types), so it should evaluate to false
console.log("Test 7:", car === '5'); // False

// Test 8: Car is not strictly equal to 'subaru' (different data types), so it should evaluate to false
console.log("Test 8:", car === 'true'); // False

// Test 9: Car is not strictly equal to 'subaru' (different data types), so it should evaluate to false
console.log("Test 9:", car === undefined); // False

// Test 10: Car is not strictly equal to 'subaru' (different data types), so it should evaluate to false
console.log("Test 10:", car === null); // False
