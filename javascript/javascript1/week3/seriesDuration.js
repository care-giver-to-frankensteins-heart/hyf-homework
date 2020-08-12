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

function logOutSeriesText() {
  let seriesTotalTime = 0;
  for (let i = 0; i < seriesDurations.length; i++) {
    let totalTime =
      seriesDurations[i].days * 24 * 60 +
      seriesDurations[i].hours * 60 +
      seriesDurations[i].minutes;
    seriesTotalTime = seriesTotalTime + totalTime;
    console.log(
      seriesDurations[i].title +
        " took " +
        (totalTime / avgLifeSpan) * 100 +
        " of my life"
    );
  }
  console.log(
    "In total that is " + (seriesTotalTime / avgLifeSpan) * 100 + " of my life"
  );
}

logOutSeriesText();
