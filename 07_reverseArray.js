// function to reverse an array

function reverseArray(arr) {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }

  return arr;
}

const arr = [1, 2, 3, 4, 5, 6];
const result = reverseArray(arr);
console.log(result);
