module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();

  let res = [];

  let newArr = filtredArr(arr);

  for (let i = 0; i < newArr.length; i++) {
    if (arr[i] === "--discard-next") {
      res.slice[i + 1];
      continue;
    }

    if (arr[i] === "--discard-prev") {
      res.pop();
      continue;
    }

    if (arr[i] === "--double-next") {
      res.push(arr[i + 1]);
      continue;
    }

    if (arr[i] === "--double-prev") {
      res.push(arr[i - 1]);
      continue;
    } else {
      res.push(arr[i]);
    }
  }
  return res;
};

function filtredArr(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i]; j++) {
      if (arr[i][j] == undefined) continue;
    }
    newArr.push(arr[i]);
  }
  return newArr;
}