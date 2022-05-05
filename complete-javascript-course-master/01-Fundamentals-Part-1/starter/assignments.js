//1.1 LECTURE: Values and Variables
const country = "Canada";
const continent = "North America";
let population = 38526760;

console.log(country + "," + continent + "," + population);

//1.2 LECTURE: Data Types 
const isIsland = false;
let language;

console.log(isIsland + ", " + country + ", " + continent + ", " + population + ", " + language);

//1.3 LECTURE: let, const, var
language = "english";
//country = "france";

//1.4 LECTURE: Basic Operators
let halfPopulation = population / 2;
console.log(halfPopulation);

population++;
console.log(population);
population--;

let finlandPopulation = 6000000;
let averagePopulation = 33000000;
let avgResult = population - averagePopulation;



let description = "Canada is in North America, and its 38626760 people speak english and french";
console.log(description);

//1.5 LECTURE: Strings and Template literals
description = `${country} is in ${continent}, and its ${population} people speak ${language}`;
console.log(description);

//1.6 LECTURE: Taking Decisions: if / else Statements
if (averagePopulation > population) {
    console.log(`${country} has a smaller population than the average country`);
} else {
    console.log(`${country} has a larger population than the average country`);
}

//1.7 LECTURE: Type Conversion and Coercion
console.log('9'-'5');
console.log('19'-'13'+'17');
console.log('19'-'13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

//1.8 LECTURE: Equality Operators: == vs. ===
/*
let numNeighbours = prompt('How many neighbour countries does your country have?');
if (numNeighbours === 1)
    console.log('Only 1 border!');
else if (numNeighbours > 1)
    console.log(numNeighbours+' borders!');
else {
    console.log('No border!');
}
*/

//1.9 LECTURE: Logical Operators

if (population < 50000000 && !isIsland) 
    console.log(`${country} is the right country for you! :)`);
else
    console.log(`${country} is the wrong country for you :(`);

//2.0 LECTURE: The switch Statement
switch (language) {
    case 'chinese' || 'mandarin': 
        console.log('MOST number of native speakers');
        break;

    case 'spanish': 
        console.log('2nd place in number of native speakers');
        break;

    case 'english': 
        console.log('3rd place in number of native speakers');
        break;

    case 'hindi': 
        console.log('4th place in number of native speakers');
        break;

    case 'arabic': 
        console.log('5th place in number of native speakers');
        break;

    default : 
        console.log('Great language as well :D');
}

//2.1 LECTURE:  The Condition (Ternary) Operator  
if (population > 33000000) 
    console.log(`${country}'s population is above average`);
else
    console.log(`${country}'s population is below average`);
