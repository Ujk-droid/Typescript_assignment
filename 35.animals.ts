
let animals: string[] = ['Dog', 'Cat', 'Rabbit'];

// Printing just the name of each animal
console.log("Animal names:");
for (let animal of animals) {
    console.log(animal);
}

// Printing a statement about each animal
console.log("\nAnimal statements:");
for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

// Additional sentence stating what these animals have in common
console.log("\nAny of these animals would make a great pet!");
