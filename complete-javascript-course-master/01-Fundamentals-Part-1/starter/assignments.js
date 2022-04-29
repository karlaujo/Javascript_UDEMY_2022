//1.1 LECTURE: Values and Variables
const country = "Canada";
const continent = "North America";
let population = 38526760;

console.log(country + "," + continent + "," + population);

//1.2 LECTURE: Data Types 
let isIsland = false;
let language;

console.log(isIsland + ", " + country + ", " + continent + ", " + population + ", " + language);

//1.3 LECTURE: let, const, var
language = "english and french";
//country = "france";

//1.4 LECTURE: Basic Operators
let halfPopulation = population / 2;
console.log(halfPopulation);

population++;
console.log(population);
population--;

let averagePopulation = 33000000;
if (averagePopulation > population) {
    console.log(country + "has a smaller population than the average country");
} else {
    console.log(country + " has a larger population than the average country");
}

let description = "Canada is in North America, and its 38626760 people speak english and french";
console.log(description);

//1.5 LECTURE: Strings and Template literals
description = country + " is in " + continent + ", and its " + population +
             " people speak " + language + ".";
console.log(description);