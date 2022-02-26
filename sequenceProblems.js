// 1. Use REPL – Random Function Math.floor(Math.random() * 10); to get Single Digit.
let random = Math.floor(Math.random() * 10);
console.log("Random Number: " + random);

// 2. Use REPL – Use Random to get Dice Number between 1 to 6
let dice = Math.floor(Math.random() * 6) + 1;
console.log("Random Number: " + dice);

// 3. Add two Random Dice Number and Print the Result
let dice1 = Math.floor(Math.random() * 6) + 1;
let dice2 = Math.floor(Math.random() * 6) + 1;

console.log("dice1: " + dice1, "dice2: " + dice2);
console.log("sum: " + (dice1 + dice2));

// 4. Use Script & Debug – Write a program that reads 5 Random 2 Digit values , then find their sum and the average
let twoDigitNumber;
let sum = 0;
for (i = 0; i < 5; i++) {
  twoDigitNumber = Math.floor(Math.random() * 90) + 10;
  console.log("Number: " + twoDigitNumber);
  sum += twoDigitNumber;
}
console.log("Sum of 5 two digits number is = " + sum);
console.log("Average of the sum of the 5 two digits number is = " + sum / 5);

/*
 5. Use Script & Debug – Unit Conversion
a. 1ft = 12 in then 42 in = ? ft
b. Rectangular Plot of 60 feet x 40 feet in meters
c. Calculate area of 25 such plots in acres.
*/
// a. 1ft = 12 in then 42 in = ? ft
let inchs = 42;
let ft = inchs / 12;
console.log("42 inch = " + ft + " feet");

//b. Rectangular Plot of 60 feet x 40 feet in meters.
let length = 60;
let breadth = 40;

let area = length * breadth;
let areas = (area * 0.0929).toFixed(2);
console.log("area in sq metres = " + areas + " sq-m");

//calculate for 25 plots
let totalArea = areas * 25;
console.log("Total Area of 25 such plots in sq-m = " + totalArea + " sq-m");

//c. Calculating area of 25 such plots.
let areaInAcre = (totalArea / 4047).toFixed(2);
console.log("Total Area of 25 such plots in acre = " + areaInAcre + " acres");
