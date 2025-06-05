// function to check whether an array is sorted or not

function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

const arr = [1, 2, 3, 4, 5];
const result = isSorted(arr);
console.log(result);
