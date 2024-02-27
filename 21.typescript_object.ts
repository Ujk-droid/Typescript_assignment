

// Define a type for City
type City = {
    name: string;
    country: string;
    population: number;
};

// Create objects for different cities
const cities: City[] = [
    { name: "Islamabad", country: "Pakistan", population: 8398748 },
    { name: "Riyadh", country: "Saudiarabiya", population: 37393129 },
    { name: "London", country: "UK", population: 8908081 }
];

// Print information about each city
console.log("Information about cities:");
cities.forEach(city => {
    console.log(`City: ${city.name}, Country: ${city.country}, Population: ${city.population}`);
});
