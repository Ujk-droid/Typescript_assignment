
function make_great(magicians: string[]): string[] {
    // Modify each magician's name by adding "the Great"
    return magicians.map((magician) => magician + " the Great");
}

function show_magicians(magicians: string[]): void {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}

const originalMagicians: string[] = ["Malahim","Mudassir", "Bhomik", "Alex"];

// Creating a copy of the original array
const copyOfOriginalMagicians: string[] = [...originalMagicians];

// Calling make_great with the copy of the array
const greatMagicians: string[] = make_great(copyOfOriginalMagicians);

console.log("Original Magicians:");
show_magicians(originalMagicians);

console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
