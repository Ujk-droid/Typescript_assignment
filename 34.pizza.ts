
let favorite_pizzas: string[] = ['Pepperoni', 'Margherita', 'BBQ Chicken'];

// Printing just the name of each pizza
console.log("Pizza names:");
for (let pizza of favorite_pizzas) {
    console.log(pizza);
}

// Printing a sentence using the name of each pizza
console.log("\nPizza statements:");
for (let pizza of favorite_pizzas) {
    console.log(`I like ${pizza} pizza.`);
}

// Additional sentence expressing love for pizza
console.log("\nI really love pizza!");
