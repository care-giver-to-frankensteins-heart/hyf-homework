//Find the shortest word
//Write a function that finds the shortest word of an array of words
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

function findWord(danishWords) {
  const result = danishWords.filter((word) => word.length < 2);
  //return result;
  console.log(result);
}

findWord(danishWords); // returns 'ø'

//Find and count the Danish letters
//Find the individual number and the total number of Danish letters in a string.

const danishLetters = ["å", "ø", "æ"];
function count(string) {
  const stringLower1 = string.toLocaleLowerCase();
  const result = { total: 0 };
  for (let i = 0; i < stringLower1.length; i++) {
    if (danishLetters.includes(stringLower1[i])) {
      if (!result[stringLower1[i]]) {
        result[stringLower1[i]] = 1;
      } else {
        result[stringLower1[i]]++;
      }
      result["total"]++;
    }
  }
  return result;
}
const danishString = "Jeg har en blå bil";
console.log(count(danishString)); // returns {total: 1, å: 1}
const danishString2 = "Blå grød med røde bær";
console.log(count(danishString2)); // returns {total: 4, æ: 1, ø: 2, å: 1}

//SPIRIT ANIMAL NAME GENERATOR
//Markup
const div = document.querySelector(".root-el-for-name");

//Add radio button for the user to choose how to display result ----
let chosenOption = "click";
const userOptions = ["mouseover", "click"];
for (let i = 0; i < userOptions.length; i++) {
  const radio = document.createElement("input");
  radio.type = "radio";
  radio.name = "user-choice";
  radio.id = "radio-" + userOptions[i];
  radio.value = userOptions[i];
  radio.checked = radio.value === chosenOption ? "checked" : "";
  radio.addEventListener("click", (e) => {
    chosenOption = e.target.value;
    changeOption();
  });
  const radioLabel = document.createElement("label");
  radioLabel.innerHTML = "On" + userOptions[i];
  radioLabel.appendChild(radio);
  div.appendChild(radioLabel);
}
//-------------------------------------------------------

//Separate the radio buttons from the input element
const br = document.createElement("br");
div.appendChild(br);
//-------------------------------------------------------

const descriptionForInput = document.createElement("label");
descriptionForInput.innerHTML = "Please enter your name";
div.appendChild(descriptionForInput);

const userInput = document.createElement("input");
div.appendChild(userInput);
userInput.addEventListener("change", () => {
  if (userInput.innerHTML === "") {
    button.innerHTML = "Get your spirit animal name!";
  }
});

const button = document.createElement("button");
button.innerHTML = "Get your spirit animal name!";
div.appendChild(button);

const targetElement = document.createElement("p");
div.appendChild(targetElement);

//Spirit animal part-setting up the events
const pick = (words) => words[Math.floor(Math.random() * words.length)];

const getSpiritAnimalName = () => {
  const userName = userInput.value;
  const generateRandomName = () => {
    const animals = [
      "Snow Leopard",
      "Worm",
      "Butterfly",
      "Caterpillar",
      "Ox",
      "Trout",
      "Phoenix",
      "Doggo",
      "Whale",
      "Ant",
    ];
    const adjectives = [
      "Bubbly",
      "Fearsome",
      "Gnarly",
      "Kinky",
      "Blushing",
      "Spirited",
      "Ill-willed",
      "Wildly courageous",
      "Faithful",
      "Dainty",
    ];
    targetElement.innerHTML = `${userName} - The ${pick(adjectives)} ${pick(
      animals
    )}`;
  };
  generateRandomName();

  //No input
  if (userName === "") {
    targetElement.innerHTML = "No name entered";
  } else {
    //New spirit animal
    button.innerHTML = "Get another name!";
  }
};
//Initialize the input to show result on click
button.addEventListener("click", getSpiritAnimalName);

//For when user clicks the radio buttons-----------------------
function changeOption() {
  if (document.getElementById("radio-mouseover").checked) {
    userInput.addEventListener("mouseover", getSpiritAnimalName);
    button.removeEventListener("click");
  } else {
    button.addEventListener("click", getSpiritAnimalName);
    userInput.removeEventListener("mouseover");
  }
}
