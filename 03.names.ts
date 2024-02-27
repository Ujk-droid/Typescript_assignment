

let personName: string = "imrankhan";

// Lowercase
console.log("Lowercase:", personName.toLowerCase());

// Uppercase
console.log("Uppercase:", personName.toUpperCase());

// Title case
console.log("Title case:", personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' '));
