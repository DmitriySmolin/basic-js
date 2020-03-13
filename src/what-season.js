module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';


  if (!(Object.prototype.toString.apply(date) === '[object Date]')) throw new Error();

  const data = date.getMonth();

  if (data === 11 || data === 0 || data === 1) return 'winter';
  if (data === 2 || data === 3 || data === 4) return 'spring';
  if (data === 5 || data === 6 || data === 7) return 'summer';
  if (data === 8 || data === 9 || data === 10) return 'autumn';
};