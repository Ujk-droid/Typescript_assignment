
function make_shirt(size: string = 'large', message: string = 'I love TypeScript'): void {
    console.log(`The shirt size is ${size.toUpperCase()} and it will have the message: "${message}".`);
}

// Creating shirts with default parameters
make_shirt(); // Large shirt with default message
make_shirt('medium'); // Medium shirt with default message

// Creating a shirt with custom size and message
make_shirt('small', 'Keep coding!'); // Small shirt with custom message
