let firstWords = [
  "Easy",
  "Awesome",
  "Corporate",
  "Pretty",
  "Gorgeous",
  "Beautiful",
  "Professional",
  "Successful",
  "Mindblowing",
  "Newnew",
];
let secondWords = [
  "Peasy",
  "Sauce",
  "Struggle",
  "Petty",
  "Building",
  "Landscapes",
  "Windows",
  "Chairs",
  "Directors",
  "Shoes",
];

const randomNumber = Math.floor(Math.random() * 10) + 0;
const startupNameFirst = firstWords[randomNumber];

const startupNameSecond = secondWords[randomNumber];
const startupName = `${startupNameFirst} ${startupNameSecond}`;
console.log(
  `The startup: ${startupName} contains ${startupName.length} characters.`
);
