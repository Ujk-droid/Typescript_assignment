
function make_great(magicians: string[]): string[] {
    // Modify each magician's name by adding "the Great"
    const greatMagicians: string[] = magicians.map((magician) => magician + " the Great");
    return greatMagicians;
}

function show_magicians(magicians: string[]): void {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}

const magicians: string[] = ["Muddassir", "Malahim", "Bhomik", "Alex"];

const greatMagicians: string[] = make_great(magicians);

console.log("Original Magicians:");
show_magicians(magicians);

console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
