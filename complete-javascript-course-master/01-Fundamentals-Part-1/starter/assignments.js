/* Coding challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Your tasks:
1. Store Mark's and John's mass and height invariables
2. Calculate both their BMI susing the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
GOOD LUCK 😀
*/ 

//1.1 Data 1
const markMass=78;
const markHeight=1.69;
const johnMass=92;
const johnHeight=1.95;


//2. BMI calculations
const johnBMI = johnMass / johnHeight ** 2;
const markBMI = markMass / markHeight ** 2;
const markHigherBMI = markBMI > johnBMI;

console.log(johnBMI, markBMI, markHigherBMI);

//4. Test Data 2
const markMass2 = 95;
const markHeight2 = 1.88;
const johnMass2 = 85;
const johnHeight2 = 1.76;

const markBMI2 = markMass2 / markHeight2 ** 2;
const johnBMI2 = johnMass2 / johnHeight2 ** 2;
const markHigherBMI2 = markBMI2 > johnBMI2;

//5.
console.log( markBMI2, johnBMI2, markHigherBMI2);


//Strings and templates 
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 2001;
const year = 2022;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + 
' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`
console.log(jonasNew);


console.log(`Just a regular string...`);

console.log(`String with 
multiple
lines`);

///////////////////////////////////////
///////////////////////////////////////

/* Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44 */

const bills = [];
let y;
for (let y = 0; y < 16; y++) {
    bills[y] = y * 30;
}

function calcTip(bills) {
    let x;
    let tip;

  for (x=0; x < bills.length; x++) {
    if (bills[x] >= 50 && bills[x] <= 300) {
        tip = 0.15;
      } else {
          tip = 0.20;
      }

      console.log(`Bill: $${bills[x]} --- Tip: $${tip}\n`);
  }
  
}
calcTip(bills);


/*Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall. */

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: 78 / 1.69 ** 2
};

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: 92 / 1.95 ** 2
}

if (mark.calcBMI < john.calcBMI) {
    console.log(`${john.fullName}'s BMI (${john.calcBMI}) is higher than ${mark.fullName}'s BMI (${mark.calcBMI})!`);
} else {
    console.log(`${mark.fullName}'s BMI (${mark.calcBMI}) is lower than ${mark.fullName}'s BMI (${mark.calcBMI})`);
}