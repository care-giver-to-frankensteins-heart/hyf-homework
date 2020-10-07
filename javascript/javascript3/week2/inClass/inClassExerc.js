//Promise creation

console.log("Promise creation");

const braedonsName = new Promise((resolve, reject) => {
  reject("braedon");
});

braedonsName
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

//Exercise 1
//Using async await
//fetch yes or no from this api: https://yesno.wtf/api. log out the answer

async function getAnswer() {
  const response = await fetch("https://yesno.wtf/api");

  const data = await response.json();
  console.log("async", data);
  return data;
}
getAnswer();

//Exercise 2
//Using promises
//fetch yes or no from this api: https://yesno.wtf/api. log out the answer
//Try fetching a url that rejects fx https://knajskdskj.jasdk. Log out the error message
fetch("https://yesno.wtf/api")
  .then((res) => res.json())
  .then((data) => console.log("promise", data));

//above async written out with the function fetchData
async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function getName() {
  return "braedon";
}

async function getAnswer() {
  try {
    const data = await fetchData("https://yesno.wtf/api");
    const name = await getName();
  } catch (error) {
    console.log(error);
  }
}

//Exercise 3
//Create a promise that resolves after 4 seconds.
//Use this promise to log out the text 'hello' after 4 seconds.
//Now make the promise fail by rejecting it with an error message instead of resolving it,
//and log the error message to the console.
function getMessage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve("resolved");
      reject("rejected");
    }, 4000);
  });
}
getMessage().catch((error) => {
  console.log(error);
});

async function resolved() {
  try {
    const message = await resolved;
    console.log(message);
  } catch (error) {
    console.log(error);
  }
}
resolved();

const resolvedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello");
    //reject()
  }, 4000);
});

resolvedPromise.then((data) => console.log(data));

/*resolvedPromise.catch(() => {
  console.log("error");
});*/

//Exercise 4
//Create a function that returns a promise, that i can use like this:

// getLoggedInUsers should wait 5 seconds before it resolves with the users!
// Sometimes it should resolve and sometimes it should reject.
// Look into Math.random

//The above example show how to consume the promise using promises.
//Now try consume the getLoggedInUsers using async/await

function getLoggedInUsers() {
  const randomNumber = Math.floor(Math.random() * Math.floor(2));
  //console.log(randomNumber);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomNumber) {
        resolve(["benna", "magdy", "carolina"]);
      } else {
        reject("error!");
      }
    }, 5000);
  });
}
getLoggedInUsers()
  .then((users) => {
    console.log(users); // ['benna', 'magdy', 'carolina']
  })
  .catch((error) => {
    console.log(error);
  });

async function loggedInUsers() {
  try {
    const user = await getLoggedInUsers();
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}
loggedInUsers();

//Exercise 5
//Using async await

//Fetch the astronauts
//After the astronauts has been fetched, fetch movies using this api
//Log out the movies

async function getAstronautsAndMovies() {
  try {
    const responseAstronauts = await fetch(
      "http://api.open-notify.org/astros.json"
    );
    const dataAstronauts = await responseAstronauts.json();

    const responseMovies = await fetch(
      "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
    );
    const dataMovies = await responseMovies.json();

    console.log("astros", dataAstronauts);

    console.log(dataMovies.map((movie) => movie.title));
  } catch (error) {
    alert(error);
  }
}

getAstronautsAndMovies();

//Exercise 6
//Get the astronauts and the movies at the same time.
//promise.all    read about it!
const dataAstronauts = fetch("http://api.open-notify.org/astros.json")
  .then((response) => response.json())
  .then((data) => data.people.map((person) => person.name));

const dataMovies = fetch(
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
)
  .then((response) => response.json())
  .then((data) => data.map((movie) => movie.title));

Promise.all([dataAstronauts, dataMovies]).then((values) => {
  console.log(values);
});


