module.exports = function countCats(matrix) {
  let count = 0;
  for (let n in matrix) {
    for (let k in matrix[n]) {
      if (matrix[n][k] === '^^') count += 1;
    }
  }
  return count;

};