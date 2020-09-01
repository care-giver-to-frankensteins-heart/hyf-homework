//Favorite dishes
//Create an array of strings with your favorite dishes.

//With js select a ul in the DOM. You add the ul to the html file.

//Now loop through each element of the favorite dishes array, you create an li element and set the text to the favorite dish.

//Then append the li element to the ul element.

const favoriteDishes = [
  "omlette",
  "falafel",
  "avocado toast",
  "watermelon",
  "smoothie",
  "buckwheat",
  "oatmeal",
];

const pageBody = document.querySelector("body");
console.log(pageBody);
const varUl = document.createElement("ul");
varUl.innerText = "My favorite dishes:";
pageBody.appendChild(varUl);

for (let i = 0; i < favoriteDishes.length; i++) {
  let dishInList = document.createElement("li");
  dishInList.innerText = favoriteDishes[i];
  varUl.appendChild(dishInList);
}
//Podcast

const podcasts = [
  {
    name: "The mystery om of Johan Klausen Varbourg",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "Tips about dogs with small legs",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "You, me, we and us",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "Breakfast news - Dinner edition",
  },
];

//1.Create a ul
//2.Loop through the podcasts
//3.For every podast:
//i.Creat an li
//ii.Create an h1 element
//iii.Change the innerHTML of the h1 to equal the name of the current podcast
//iv.Append the h1 to the li
//v.Now add an image to the li with the src set to the imageUrl. But only if the imageUrl key exists on the object!
//4.Append the li to the ul

//pageBody = document.querySelector("body");
const podcastList = document.createElement("ul");
//varUl2.innerHTML = "<h1>Podcast</h1>";
pageBody.appendChild(podcastList);

for (let i = 0; i < podcasts.length; i++) {
  let liInPodcast = document.createElement("li");
  let podcastTitle = document.createElement("h1");
  liInPodcast.appendChild(podcastTitle);
  podcastTitle.innerHTML = podcasts[i].name;
  if (podcasts[i].imageUrl) {
    let imgMake = document.createElement("img");
    imgMake.src = podcasts[i].imageUrl;
    liInPodcast.appendChild(imgMake);
  }
  varUl.appendChild(liInPodcast);
}
//IMAGE INSERTER
/*
Create a function that has two parameters: imageUrl and elementToAppendImageTo. 
The function should create an img tag and set the src attribute of the img to the imageUrl parameter. 
The function should then append the img to the elementToAppendImageTo - html element.*/
const imageTitle = document.createElement("h1");
imageTitle.innerText = "Image inserter";
pageBody.appendChild(imageTitle);

const appendImage = (imageUrl, elementToAppendImageTo) => {
  const createImg = document.createElement("img");
  createImg.src = imageUrl;
  elementToAppendImageTo.appendChild(createImg);
};
appendImage("https://picsum.photos/536/354", document.querySelector("body"));

//SIMPLE EVENT LISTENER
//When clicking a button, change the text on the button to say "Button clicked"

/*document.querySelector('div')
.addEventListener('click', function(param)){
console.log(param)
console.log('clicked')
}*/
const simpleEventListener = document.createElement("h1");
simpleEventListener.innerText = "Simple event listener";
pageBody.appendChild(simpleEventListener);

const button = document.createElement("button");
pageBody.appendChild(button);
button.innerText = "Click Click Click me!";
button.addEventListener("click", buttonClicked);

function buttonClicked() {
  button.innerText = "Button clicked";
}

// Light mode dark mode
/* Clicking a button should toggle
 the background color of the body and the text color in the page. 
If the background is white and the text is black,
then clicking the button will
 make the background dark and the text white and vice versa*/
//also make the text on the button change
const lightDarkTitle = document.createElement("h1");
lightDarkTitle.innerText = "Light and dark mode";
pageBody.appendChild(lightDarkTitle);

const blackoutButton = document.createElement("button");
blackoutButton.innerText = "Switch off";
pageBody.appendChild(blackoutButton);
blackoutButton.addEventListener("click", blackoutButtonClicked);

document.body.style.backgroundColor = "white";
document.body.style.color = "black";

function blackoutButtonClicked() {
  if (document.body.style.backgroundColor == "white") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    blackoutButton.innerText = "Switch on";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    blackoutButton.innerText = "Switch off";
  }
}
