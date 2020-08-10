function getTempSensitiveClothes(temperature) {
  if (temperature < 0) {
    return "fur";
  } else if (temperature < 15) {
    return "sweater";
  } else if (temperature < 30) {
    return "t-shirt";
  } else {
    return "naked";
  }
}
getTempSensitiveClothes(15);
