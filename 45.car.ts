
interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allow arbitrary additional properties
}

function store_car_info(manufacturer: string, model: string, ...args: [string, any][]): Car {
    const car: Car = {
        manufacturer: manufacturer,
        model: model
    };

    // Loop through additional arguments and add them to the car object
    args.forEach(([key, value]) => {
        car[key] = value;
    });

    return car;
}

// Call the function with required information and additional properties
const myCar: Car = store_car_info("Toyota", "Camry", ["color", "blue"], ["year", 2022]);

console.log(myCar);
