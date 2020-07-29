let dogYearOfBirth = 2017;

let dogYear = 0;
let dogYearFuture = 2027;

let shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears) {
  dogYear = (dogYearFuture - dogYearOfBirth) * 7;
  console.log(`Your dog will be ${dogYear} dog years in ${dogYearFuture}`);
} else {
  dogYear = dogYearFuture - dogYearOfBirth;
  console.log(`Your dog will be ${dogYear} in human years in ${dogYearFuture}`);
}
