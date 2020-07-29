//let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
let pWidth = 8;
let pDepth = 10;
let pHeight = 10;
let pHousePrice = 2500000;
let jWidth = 5;
let jDepth = 11;
let jHeight = 8;
let gardenSizeInM2 = 70;
let jHousePrice = 1000000;
let pVolumeInMeters = pWidth * pDepth * pHeight;
let pGardenSizePrice = gardenSizeInM2 * 300;

pHousePrice = pVolumeInMeters * 2.5 * 1000 + pGardenSizePrice;
console.log(pHousePrice);
let jGardenSizePrice = pGardenSizePrice;
let jVolumeInMeters = jWidth * jDepth * jHeight;
jHousePrice = jVolumeInMeters * 2.5 * 1000 + jGardenSizePrice;
console.log(jHousePrice);
