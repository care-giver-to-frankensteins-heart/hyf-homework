//ITEM ARRAY REMOVAL

//Remove the item in names array that is equal to nameToRemove

const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

for (let i = 0; i < names.length; i++) {
  if (names[i] === nameToRemove) {
    names.splice(i, 1);
    break;
  }
}

console.log(names);
console.log("\n");

///
//WHEN WILL WE BE THERE

//Write a function where you specify your speed in km/h and how far you have to go in km.

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function getTravelTime(travelInformation) {
  const time = travelInformation.destinationDistance / travelInformation.speed;
  console.log(time);
  const hour = Math.floor(time);
  const minutes = Math.floor((time - hour) * 60);
  return `${hour} hours and ${minutes} minutes`;
}
const travelTime = getTravelTime(travelInformation);

console.log(travelTime);
console.log("\n");

//SERIES DURATION OF MY LIFE

//Create a function that, using the seriesDurations array, logs out sth like this:
//Game of thrones took 0.01% of my life (take 80 years for life duration)
// Sopranos took 0.012% of my life
// The Wire took 0.007% of my life
// In total that is 0.2% of my life

const seriesDurations = [
  {
    title: "Pose",
    days: 0,
    hours: 13,
    minutes: 18,
  },
  {
    title: "RuPaul´s Drag Race",
    days: 4,
    hours: 17,
    minutes: 57,
  },
  {
    title: "Star Trek: Voyager",
    days: 5,
    hours: 9,
    minutes: 0,
  },
];
const avgLifeSpan = 80 * 365 * 24 * 60; //minutes

function logOutSeriesText(seriesDurations) {
  let totalPercentage = 0;
  for (let i = 0; i < seriesDurations.length; i++) {
    let seriesMinutesLifePercentage =
      ((seriesDurations[i].days * 24 * 60 +
        seriesDurations[i].hours * 60 +
        seriesDurations[i].minutes) /
        avgLifeSpan) *
      100;

    console.log(
      `"${seriesDurations[i].title}" took ${seriesMinutesLifePercentage.toFixed(
        3
      )}% of my life.`
    );

    totalPercentage = (
      seriesMinutesLifePercentage + seriesMinutesLifePercentage
    ).toFixed(3);
  }

  console.log(`
    In total that is ${totalPercentage}% of my life!`);
}

logOutSeriesText(seriesDurations);
console.log("\n");

//NOnoNØnOYes (NOTE TAKING APP)

//The saveNote function should push an object to the notes array with the keys content and id.
//Example: [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

const notes = [];

function saveNote(content, id) {
  notes.push({note: content, id, checked: false})
    note: content,
    id: id,
    checked: false,
  };
  notes.push(note);
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

//Get a note
//Now a user can save a note, but what if user wants to see a specific note,
// but only remembers the id?

function getNote(id) {
  if (!id || isNaN(id)) {
    return "Either not a number or no input";
  }
  for (let i = 0; i < notes.length; i++) {
    if (id == notes[i].id) {
      return notes[i];
    }
  }
  return "error, the id is not in the object array";
}
const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

//Log out notes
//What if the user just wants to read all her notes?
//example: The note with id: 1, has the following note text: Pick up groceries

function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    console.log(
      `The note with id: ${notes[i].id} has the following note text: ${notes[i].note}`
    );
  }
}

logOutNotesFormatted(); // should log out the text below

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry

//Unique feature
//This feature signals when a note has been checked
//as i added in saveNote function parameter for all note objects that now has a default unchecked
//when user enters a valid ID to notes then it switches to checked

function noteFinished(id) {
  if (!id || isNaN(id)) {
    return "Either not a number or no input";
  }
  for (let i = 0; i < notes.length; i++) {
    if (id == notes[i].id) {
      if (notes[i].checked == false) {
        notes[i].checked = true;
      } else {
        notes[i].checked = false;
      }
    }
  }
}
console.log(notes[2]);
noteFinished(2); //calling the function set the object property to true
console.log(notes[2]);
noteFinished(2); //calling the same function of same object with same property were calling sets it back to false
