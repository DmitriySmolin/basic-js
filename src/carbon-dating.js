const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {

  const numericValue = parseFloat(sampleActivity);

  if (
    sampleActivity === false || isNaN(numericValue) || typeof sampleActivity !== "string" ||
    numericValue >= MODERN_ACTIVITY || numericValue <= 0
  )
    return false;


  return Math.ceil(Math.log(MODERN_ACTIVITY / numericValue) / (0.693 / HALF_LIFE_PERIOD));
};