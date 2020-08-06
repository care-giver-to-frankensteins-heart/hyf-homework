function getFullname(firstname, surname) {
  return ` ${firstname} ${surname}`;
}

const fullname1 = getFullname("ember", "Moss");
const fullname2 = getFullname("ember", "blooming");

console.log(fullname1, fullname2);

function getFullname(firstname, surname, useFormalName) {
  if (firstname !== "" && surname !== "") {
    if (useFormalName) {
      return `
      Dutches ${firstname} ${surname} 
    `;
    } else {
      return `${firstname} ${surname} `;
    }
  } else {
    return "Please fill out both first name and surname";
  }
}
getFullname("ember", "Moss", false);
