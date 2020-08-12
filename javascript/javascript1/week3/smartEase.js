const notes = [];

function saveNote(content, id) {
  note = {
    note: content,
    id: id,
    checked: false,
  };
  notes.push(note);
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

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

function logOutNotesFormatted() {
  // your code here
  for (let i = 0; i < notes.length; i++) {
    console.log(
      `The note with id: ${notes[i].id} has the following note text: ${notes[i].note}`
    );
  }
}

logOutNotesFormatted(); // should log out the text below

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry

//unique feature
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
