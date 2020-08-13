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
