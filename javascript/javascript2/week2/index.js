//Doubling of number
//Say you would like to write a program that doubles the odd numbers in an array and throws away the even number.

//Your solution could be something like this:
/*let numbers = [1, 2, 3, 4];
let newNumbers = [];

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 !== 0) {
        newNumbers[i] = numbers[i] * 2;
    }
}

console.log("The doubled numbers are", newNumbers); // [2, 6]*/
//Rewrite the above program using map and filter
//don't forget to use arrow functions.

let numbers = [1, 2, 3, 4];
let newNumbers = [];

const filterNumbers = numbers.filter((num) => num % 2);
newNumbers = filterNumbers.map((num) => num * 2);

//Working with movies
//Copy the movies array in the movies file. Use this array to do the following tasks:

//Create an array of movies containing the movies with a short title (you define what short means)
//Create an array of movie titles with long movie titles
//Count the number of movies made between 1980-1989 (including both the years)
//Create a new array that has an extra key called tag. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)
//Using chaining, first filter the movies array to only contain the movies rated higher than 6. Now map the movies array to only the rating of the movies.
//Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin. So if there were 3 movies that contained Surfer, 1 with Alien and 2 with Benjamin, you would return 6. Can you make sure the search is case insensitive?
//Create an array of movies where a word in the title is duplicated. Fx "Star Wars: The Clone Wars" the word Wars is duplicated. Here are some madeup examples of movies with duplicated words in the title: "The three men and the pistol", "Chase three - The final chase"
//Calculate the average rating of all the movies using reduce. Optional
//Count the total number of Good, Average and Bad movies using reduce. A return could fx be {goodMovies: 33, averageMovies: 45, goodMovies: 123} Optional
