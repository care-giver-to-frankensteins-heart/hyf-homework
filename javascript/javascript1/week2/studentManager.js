const class07Students = [];

function addStudentToClass(studentName) {
  // You write code here
  if (studentName === "") {
    return "Please add a student name to the 07 class";
  } else {
    if (class07Students.length > 6 && studentName !== "Queen") {
      return "Cannot add more students to class 07";
    } else if (class07Students.includes(studentName)) {
      return `Student ${studentName} is already in the class`;
    } else {
      class07Students.push(studentName);
    }
  }
}

addStudentToClass("ember");
addStudentToClass("Zoey");
addStudentToClass("Karolina");
addStudentToClass("Valentina");
addStudentToClass("ember");
addStudentToClass("Ali");
addStudentToClass("Queen");
addStudentToClass("ember");

function getNumberOfStudents() {
  // You write code here
  return class07Students.length;
}

getNumberOfStudents();
