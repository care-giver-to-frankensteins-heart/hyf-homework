//Click counter
//Create an index.html file with two buttons:

//When the button first is clicked it should first log out 0. The next time it is clicked it should log out 1, etc.
//Clicking the second button should also count up and logout the same variable.

const first = document.getElementById("first");

const second = document.getElementById("second");
let i = 0;

const message = () => {
  console.log(i);
  i++;
};

function callBack() {
  return message();
}

first.addEventListener("click", callBack);
second.addEventListener("click", callBack);

//Delay clicker
//Create a button in html with the text "Log in 3 seconds"

//When the button is clicked it should wait 3 seconds and then log the text "This text was delayed by 3 seconds".
const timeoutButton = document.getElementById("timeout");

timeoutButton.addEventListener("click", () => {
  setTimeout(() => {
    console.log("This text was delayed by 3 sec!");
  }, 3000);
});

/*const timeoutButton = document.getElementById("timeout");
timeoutButton.addEventListener("click", timeOutLog);

function timeOutLog() {
  setTimeout(function () {
    console.log("The text was delayed by 3 seconds");
  }, 3000);
  timeoutButton.removeEventListener("click", timeOutLog);
}*/

//Page onload
//First create a callback function as a variable that logs this out: "DOM fully loaded and parsed"
//This callback function should be called when the DOM is fully loaded.
//To find what this function is called go to google! What should we search for???
window.addEventListener("DOMContentLoaded", logOut);
function logOut() {
  console.log("DOM fully loaded and parsed");
}
