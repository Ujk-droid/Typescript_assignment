
// Author: UZMAKHAN
// Date: 2024-02-24
// This program checks if a given number is even or odd.

function isEven(number: number): boolean {
    return number % 2 === 0; // Checking if the number is divisible by 2
}

// Example usage:
const num: number = 8;
if (isEven(num)) {
    console.log(`${num} is even.`);
} else {
    console.log(`${num} is odd.`);
}
