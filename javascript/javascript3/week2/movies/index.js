const url =
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";

async function localFunction() {
  try {
    const moviesResponse = await fetch(url);
    const moviesData = await moviesResponse.json();

    //Create an array of bad movies
    const badMovies = moviesData.filter((movie) => movie.rating <= 5);

    //Create an array of bad movies since year 2000
    const badMoviesSince2000 = badMovies.filter((movie) => movie.year >= 2000);
    console.log({ "bad movies": badMoviesSince2000 });
    const badMoviesList2000 = badMoviesSince2000.map((movie) => movie.title);
    console.log({ "bad movies title list": badMoviesList2000 });
  } catch (error) {
    alert(error);
  }
}
localFunction();

/*try {
  console.log(localFunction());
} catch (error) {
  console.log(error);
}*/
