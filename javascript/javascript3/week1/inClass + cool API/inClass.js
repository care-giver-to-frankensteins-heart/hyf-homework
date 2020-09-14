const willThisWork = JSON.stringify(08329);
console.log(JSON.parse(willThisWork));
//come to a number
//const willThisWork = JSON.stringify(08379);
//console.log(JSON.stringify(willThisWork));
//will convert to string

//we imported this object from JSON file and have to put it in the back tics `so that it acts as a string
const jsonUser = `{
    "user": {
        "first": "Braedon",
        "last": "Gough",
        "age": "25",
        "isACoolDude": false,
        "favoriteSnacks": ["pizaa", "chips"]
    }
}`;
console.log(JSON.parse(jsonUser));

//fetch is async, interacting with API´s is async
const data = fetch(
  "http://cat-fact.herokuapp.com/facts/random?amount=3"
).then((response) => response.json().then((data) => console.log(data)));
//console.log(data);
const body = document.querySelector("body");
const dataFacts = fetch(
  "http://cat-fact.herokuapp.com/facts/random?amount=3"
).then((response) =>
  response.json().then((data) =>
    data.forEach((catFact) => {
      const h2 = document.createElement("h2");
      h2.innerHTML = catFact.text;

      body.appendChild(h2);
    })
  )
);
//API's
//send a format back to us in json format
//isolated cilinder which contains information
//we can make an API more dynamic, we can ask it what the weather is
//we access APIs through URL
//we can access some endpoint f.ex. /facts /users
//get data from database(fetch, get) or store data to database(post)

//Astronauts in space
//Use this api to fetch how many astronauts are currently in spaces.
//Add the following text to the DOM, using the data about astronauts:
/*There are NUMBER_OF_ASTRONAUTS astronauts in space, they are:
ASTRONAUT_NAME1
ASTRONAUT_NAME2
ASTRONAUT_NAME3
ASTRONAUT_NAME4
ASTRONAUT_NAME5*/

const dataAstronauts = fetch("http://api.open-notify.org/astros.json").then(
  (response) =>
    response.json().then((data) => {
      const h1 = document.createElement("h1");
      h1.innerHTML = `There are ${data.number} astronauts in space, they are:
    `;
      body.appendChild(h1);

      data.people.forEach((person) => {
        const h3 = document.createElement("h3");
        h3.innerHTML = person.name;
        body.appendChild(h3);
      });
    })
);

//Dog fan website
//Lets create a site for dog lovers using this API: https://dog.ceo/api/breeds/image/random
//1.Get a random dog image and display it in the browser
//2.Get a new image every 2 sec.
//3.Get the list of all breeds from https://dog.ceo/api/breeds/list/all
//4.Display a random image of a breed from the list https://dog.ceo/api/breed/[BREEDNAME]/images/random
//5.Display the name of the breed under the image

//1
const img = document.createElement("img");
body.appendChild(img);
const dataDogs = fetch("https://dog.ceo/api/breeds/image/random").then(
  (response) =>
    response.json().then((data) => {
      img.style.width = "500 px";
      img.src = data.message;
    })
);

//2
setInterval(() => {
  fetch("https://dog.ceo/api/breeds/image/random").then((response) =>
    response.json().then((data) => {
      img.style.width = "50 px";
      img.src = data.message;
    })
  );
}, 2000);

//3

fetch("https://dog.ceo/api/breeds/list/all").then((response) =>
  response.json().then((data) => {
    const listOfBreeds = Object.keys(data.message);
    listOfBreeds.forEach((breedName) => {
      const div = document.createElement("div");
      div.innerHTML = breedName;
      body.appendChild(div);
    });
  })
);

//4
//https://dog.ceo/api/breed/<breedname>/images/random
let dogBreeds = [];

function getDogBreeds() {
  return fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((data) => {
      dogBreeds = Object.keys(data.message);
    });
}

const randomNumber = Math.floor(Math.random() * Math.floor(94));
const div = document.createElement("div");
div.style.color = "blue";

getDogBreeds().then(() => {
  fetch(`https://dog.ceo/api/breed/${dogBreeds[randomNumber]}/images/random`)
    .then((response) => response.json())
    .then((data) => {
      const imageBreed = document.createElement("img");
      body.appendChild(imageBreed);
      imageBreed.src = data.message;
      div.innerHTML = dogBreeds[randomNumber]; //5
      body.appendChild(div);
    });
});
