// count frequency of each element of an array

function countFrequency(arr) {
  let obj = {};

  for (let item of arr) {
    if (!obj.hasOwnProperty(item)) {
      obj[item] = 1;
    } else {
      obj[item] += 1;
    }
  }

  return obj;
}

const arr = [1, 2, 3, 2, 4, 1, 5, 7, 8, 5, 3, 5];
const result = countFrequency(arr);
console.log(result);
