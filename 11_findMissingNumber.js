// function to find missing number in an array

function findMissing(arr) {
  arr.sort((a, b) => a - b); 

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] > 1) {
      return arr[i - 1] + 1;
    }
  }

  return false;
}

const arr = [2,1,4,3,5,6];

const result = findMissing(arr);
console.log(result);