const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

//const travelTime = notThisFunctionName(travelInformation);
//console.log(travelTime); // 4 hours and 42 minutes
function getTravelTime(travelInformation) {
  const time = travelInformation.destinationDistance / travelInformation.speed;
  console.log(time);
  const hour = Math.floor(time);
  const minutes = Math.floor((time - hour) * 60);
  return `${hour} hours and ${minutes} minutes`;
}
const travelTime = getTravelTime(travelInformation);

console.log(travelTime);
