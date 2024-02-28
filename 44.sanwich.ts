
function make_sandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("You ordered an empty sandwich. Please add some ingredients!");
    } else {
        console.log("Ingredients:");
        items.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }
    console.log("--------------------");
}

// Call the function three times with different numbers of arguments
make_sandwich("Turkey", "Cheese", "Lettuce", "Tomato");
make_sandwich("Ham", "Swiss Cheese");
make_sandwich("Peanut Butter", "Jelly");
f