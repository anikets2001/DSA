// find largest and smallest in an array

function findMinMax(arr) {
  let min = Infinity;
  let max = -Infinity;

  for (let item of arr) {
    if (item < min) min = item;
    if (item > max) max = item;
  }

  return [min, max];
}

const arr = [4, 2, 3, 6, 8, 9, 7];
const result = findMinMax(arr);
const [smallest, largest] = result;
console.log(smallest);
console.log(largest);