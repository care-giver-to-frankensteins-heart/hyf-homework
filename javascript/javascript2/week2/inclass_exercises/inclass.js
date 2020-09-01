//const arr = [];
//console.log(arr);
/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
/**
 //Get an array with listing objects with random color and speed
 // @param {integer} numberOfListings - The number of listings
 // @returns {array} Array containing the listing objects
 */
function generateListings(numberOfListings) {
  const listings = [];

  const listingType = ["House", "Apartment", "Shed", "Dorm", "Farm"];
  const listingFacilities = [
    "Parkering",
    "Elevator",
    "Altan",
    "Have",
    "Husdyr",
  ];

  for (let i = 0; i < numberOfListings; i++) {
    const listing = {};
    const randomTypeIndex = randomIntFromInterval(0, listingType.length - 1);
    const numberOfFacilities = randomIntFromInterval(
      1,
      listingFacilities.length - 1
    );
    const facilities = [];
    for (let i = 0; i < numberOfFacilities; i++) {
      const randomIndexFacilities = randomIntFromInterval(
        0,
        listingFacilities.length - 1
      );
      const randomFacility = listingFacilities[randomIndexFacilities];

      if (!facilities.includes(randomFacility)) {
        facilities.push(randomFacility);
      }
    }

    listing.type = listingType[randomTypeIndex];
    listing.facilities = facilities;
    listing.price = randomIntFromInterval(1, 10000);
    listing.hasGarden = Boolean(randomIntFromInterval(0, 1));
    listing.size = randomIntFromInterval(12, 1000);
    listing.img = `https://loremflickr.com/200/200/${listing.type}`;

    listings.push(listing);
  }

  return listings;
}

generateListings(37);
console.log(generateListings(37));
//we had to change the function calling from 20 to 37 to create 17 more objects pushed to the array listings

//ForEach
//Create 37 listings and log out every listings size
const listings = generateListings(37); //we created new array listings beacuse the other array listings is local to function generateListings
listings.forEach((listing) => {
  console.log(listing.size);
});
//for each- takes a function as a parameter so thats why we assigned a function generateListings to an array listings
//object is the parameter to the function

//Map
//Create an array that contains all the 37 listing prices.

const mapped = listings.map((listing) => listing.price); //we deleted return because it can be written in one line without currly brackets
console.log(mapped);
/*Filter
Using the 37 listings from the previous tasks

Create an array of cheap listings. You define what cheap means. Each item in this array should be of type object
*/
const cheapListings = listings.filter((listing) => listing.price < 5000);
console.log(cheapListings);
//Create an array of expensize listings prices. Each item in this array should be of type number
//we used maade variable because with mapped with converted from 37 objects a list of prices which are numbers and then we filter them
//we didnt use .price in listing parameter becase then it would  turn number into object so it would compare how many objects is there in array higher than number 5000 but we needed to check how many numbers are bigger than 5000
//thats why just listing and not listing.price
const expensiveListings = mapped.filter((listing) => listing > 5000);
console.log(expensiveListings);

//Create an array of listings that have parkering. Each item in this array should be of type object
const parkingListings = listings.filter(
  (listing) => listing.facilities.includes("Parkering") //we could have used typeOf if we had just a string but we needed to use includes because of array listing
);
console.log(parkingListings);

//Filter listings
//If a user fx click on a button indicating that the user only wants listings that are of the type farm.
//Lets try and imagine how we would use a function to create this functionality:

const pageBody = document.querySelector("body");
const button = document.createElement("button");
button.innerText = "click me!";
pageBody.appendChild(button);

//const listings = generateListings(20);
const clickButton = () => {
  const listings = generateListings(20);
  const filter = {
    type: "Farm",
  };

  function filterListings(listings, filterObject) {
    return listings.filter((listing) =>
      listing.type.includes(filterObject.type)
    );
  }

  const farmListings = filterListings(listings, filter);
  console.log(farmListings);
};
button.addEventListener("click", clickButton);
