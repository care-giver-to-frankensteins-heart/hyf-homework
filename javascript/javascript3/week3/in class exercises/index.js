//Create a user class
//The class should have 2 properties: firstName and lastName.
//Hint: Use this and constructor.

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFirstName() {
    return this.firstName;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
//Use the new keyword and assign the instance in a variable.
const user = new User("ember", "blooming");
//Try to log out the instance of the User to the console.
console.log(user);
//Try to log out the users firstName
console.log(user.getFirstName()); // or console.log(user.firstName)
//Call the getFullName method and log the result to the console.
console.log(user.getFullName());

//Creating a CV class
//The CV that we will be making uses three classes: Job, Education and CV.
//The Job and Education classes you need to create.
//Create the classes Job and Education.
//Job has five properties: id, title, description, startDate and endDate (the dates can be strings or actual Date objects).
//Education has six properties: id, title, school, address, startDate and endDate.

//Now add the functionality for the methods in the CV class.
//Remember: jobs and educations are just arrays of class instances.
//So use your array manipulation knowledge for the add and remove methods.

class CV {
  constructor(email) {
    this.jobs = [];
    this.educations = [];
    this.email = email;
  }

  addJob(job) {
    this.jobs.push(job);
  }

  removeJob(job) {
    //const jobIndex = this.jobs.findIndex((job) => job.id === jobId)
    //this.jobs.splice(jobIndex,1)
    this.jobs = this.jobs.filter((jobElement) => jobElement.id !== job.id);
  }

  addEducation(education) {
    this.educations.push(education);
  }

  removeEducation(education) {
    this.educations = this.educations.filter(
      (educationElement) => educationElement.id !== education.id
    );
  }
  renderCV() {
    email.innerHTML = this.email;

    this.jobs.forEach((job) => {
      const jobItem = document.createElement("li");
      jobItem.style.listStyle = "none";
      jobItem.innerHTML = `
        <div>Title: ${job.title} </div>
        <div>Description: ${job.description}</div>
        <div>Start date: ${job.startDate}</div>`;

      jobs.appendChild(jobItem);
    });

    this.educations.forEach((education) => {
      const educationItem = document.createElement("li");
      educationItem.style.listStyle = "none";
      educationItem.innerHTML = `
          <div>Title: ${education.title}</div>
          <div>School: ${education.school}</div>
          <div>Start date: ${education.startDate}</div>`;

      educations.appendChild(educationItem);
    });
  }
}
//Create a new CV instance using the new keyword, and save it in a variable called myCV
const myCV = new CV("ipoljupci@gmail.com");
//console.log(myCV);

class Job {
  constructor(id, title, description, startDate, endDate) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
//Apply the methods you have created on the myCV object.
//Create a few Job and Education objects and add them to your CV.
const job1 = new Job(
  1,
  "cook",
  "cooking in busy environment",
  "1/12/2020",
  "1/9/2020"
);
console.log(job1);
const job2 = new Job(
  2,
  "dishwasher",
  "washing dishes in busy environment",
  "18/1/2020",
  "1/9/2020"
);
console.log(job2);

class Education {
  constructor(id, title, school, address, startDate, endDate) {
    this.id = id;
    this.title = title;
    this.school = school;
    this.address = address;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
const education1 = new Education(
  1,
  "Sculpture",
  "Academy of Fine Arts",
  "Kongens Nytorv 1",
  "1/10/2018",
  "1/7/2022"
);
console.log(education1);
const education2 = new Education(
  2,
  "Web Development",
  "Hack Your Future",
  "Disie, Vesterbro",
  "15/6/2020",
  "1/3/2020"
);
console.log(education2);

//Remove a job and an education from myCV.
myCV.addJob(job1);
myCV.addJob(job2);
myCV.removeJob(job1);

myCV.addEducation(education1);
myCV.addEducation(education2);
myCV.removeEducation(education2);
console.log(myCV);

//Add a method to the CV class called renderCV().
//This method should render out the CV using HTML.
//Use document.getElementById("<id>")
//and document.createElement("<element>"),
// as well as element.appendChild(<element>) to build your HTML using JavaScript.
const email = document.getElementById("email");
const jobs = document.getElementById("jobs");
const educations = document.getElementById("education");

myCV.renderCV();
