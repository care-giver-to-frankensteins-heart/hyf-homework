// on site https://alexwohlbruck.github.io/cat-facts/docs/

//API's send a format back to us in json format
//API´s are isolated cilinder which contains information
//we access APIs through URL
//on above mentioned site there is cat facts API Documentation and it has a base URL for all endpoint
//https://cat-fact.herokuapp.com
//there we can access some endpoint f.ex. /facts /users

//we use API's to get data from database(fetch) or store data to database(post)

//getting data from /facts endpoint is on this URL https://alexwohlbruck.github.io/cat-facts/docs/endpoints/facts.html
//we entered the endpoints manually into URL ,after seeing which data bases are on our baseline URL, to access the desired endpoint

//we can also create functionality through .js to interact with our API´s by aceessing/getting desired and or randomized data
//exmaples of that are in the inClass.js where we used fetch to get 3 random facts and then we display them in our browser

const data = fetch(
  "http://cat-fact.herokuapp.com/facts/random?amount=3"
).then((response) => response.json().then((data) => console.log(data)));
console.log(data);
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
//it is worth to note that fetch is async, interacting with API´s is async
//when we attempt to fetch data the first time from our cat-facts API with endpoint facts and random amount 3
//after responding to 2 promises (which we will talk more about in next class) to get to our data
//we can see that API responds to us with json data, and it is in this case an array of 3 objects
//each of these objects have series of parameters of which our random cat facts are stored in "text"
//we access and display text for each random cat fact
//thats it!
//this can be useful to have open API´s not just for fun but to improve f.ex. transparency of a pharmacy
//where they could have list of all their ingredients of specific drug components stored and accessible to public
//and or to have some key ingredients private and stored and easily updated away from public eye
