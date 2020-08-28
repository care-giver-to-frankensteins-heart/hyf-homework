let PA = {
  userName: null,
  notes: [],
};
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let currentMonth;
function saveNote(content) {
  PA.notes.push(content);
}

function getReply(command) {
  let lowCaseCommand = command.toLowerCase();

  //this is handling the intro command 'hello my name is'
  if (lowCaseCommand.includes("hello my name is")) {
    if (PA.userName === null) {
      PA.userName = command.slice(16).trim();
      return `Hy ${PA.userName}`;
    }
    //what if the name has already been typed in?
    if (PA.userName !== null) {
      return "hi, i already have your name, thanks!";
    }
  }
  //what is my name?
  if (lowCaseCommand.includes("what is my name?")) {
    if (PA.userName === null) {
      return "I havent met you yet! What is your user name?";
    } else {
      return `Hy again ${PA.userName}`;
    }
  }
  //add to to do
  if (lowCaseCommand.startsWith("add")) {
    let note = command.slice(4, command.length - 12);
    saveNote(note);
    return `adding ${note} to the to do list`;
  }
  //remove from to do
  if (lowCaseCommand.startsWith("remove")) {
    let note = command.slice(7, command.length - 14);
    for (i = 0; i < PA.notes.length; i++) {
      if (note === PA.notes[i]) {
        PA.notes.splice(i, 1);
      }
    }
    return `Removed ${note} from your to do list!`;
  }
  //show to do
  if (lowCaseCommand.startsWith("what is on my to do?")) {
    return `You have ${PA.notes.length} todos - ${PA.notes.join(" and ")}`;
  }
  //get day
  if (lowCaseCommand.includes("what day is it today")) {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    for (let i = 0; i <= months.length; i++) {
      if (month === i) {
        currentMonth = months[i];
      }
    }
    const year = today.getFullYear();
    return `${day}. of ${currentMonth} ${year}`;
  }
  //math
  if (command.match("What is ")) {
    const extractElements = /(?<left>[0-9]+) (?<operator>.) (?<right>[0-9]+)/;
    let match = command.match(extractElements);
    if (match[2] === "+") {
      return Number(match[1]) + Number(match[3]);
    }
    if (match[2] === "*") {
      return Number(match[1]) * Number(match[3]);
    }
    if (match[2] === "/") {
      return Number(match[1]) / Number(match[3]);
    }
    if (match[2] === "-") {
      return Number(match[1]) - Number(match[3]);
    }
  }
  //timer
  if (command.match("Set a timer for ")) {
    const words = command.split(" ");
    const numberTimer = Number(words[4]);
    const unitsTimer = words[5];
    if (unitsTimer === "minutes") {
      const minutesNumber = numberTimer * 60;
      setTimeout(() => {
        console.log("Timer done");
      }, minutesNumber * 1000);
    }
    if (unitsTimer === "seconds") {
      const secondsNumber = numberTimer;
      setTimeout(() => {
        console.log("Timer done");
      }, secondsNumber * 1000);
    }
    if (unitsTimer === "hours") {
      const hoursNumber = numberTimer * 3600;
      setTimeout(() => {
        console.log("Timer done");
      }, hoursNumber * 1000);
    }
    return `Timer set for ${numberTimer} ${unitsTimer}`;
  }
}

//testing functions calls
getReply("What is my name?");
getReply("Hello my name is ember");
getReply("Hello my name is ember");

getReply("What is my name?");
getReply("add fishing to my to do");
getReply("add singing in the shower to my to do");
console.log(PA.notes);
getReply("What day is it today?");
getReply("What is on my to do?");
getReply("Remove fishing from my to do");
console.log(PA.notes);
getReply("What is on my to do?");
getReply("What is 3 + 3");
getReply("What is 4 * 12");
getReply("What is 10 / 2");
getReply("What is 40 - 10");
getReply("Set a timer for 4 minutes");
