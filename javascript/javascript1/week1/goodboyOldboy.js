let dogYearOfBirth = 2027 - 10;

let dogYear = 0;
let dogYearFuture = 2027;

dogYear = dogYearFuture - dogYearOfBirth;
console.log(
  "Your dog will be " + dogYear + " human years old in " + dogYearFuture + "."
);
let shouldShowResultInDogYears = dogYear * 7;
console.log(
  "Your dog will be " +
    shouldShowResultInDogYears +
    " dog years old in " +
    dogYearFuture +
    "."
);
dogYear = false;
if (shouldShowResultInDogYears) {
  dogYear = (dogYearFuture - dogYearOfBirth) * 7;
} else {
  dogYear = dogYearFuture - dogYearOfBirth;
}
console.log(
  "Your dog will be " + dogYear + " dog years old in " + dogYearFuture + "."
);
