
// Define an array of countries
const countries: string[] = ["Pakistan", "Iran", "UK"];

// Try to access an index that is out of bounds
const indexOutOfRangeCountry = countries[3]; // Attempting to access the 4th element which doesn't exist

// This line will never be reached because an error occurs above
console.log("Countries at index 3:", indexOutOfRangeCountry);
