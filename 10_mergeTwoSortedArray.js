// function to merge two sorted arrays into one

function mergeArrays(arr1, arr2) {
  let result = [];

  for (let item of arr1) {
    result.push(item);
  }

  for (let item of arr2) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }

  return result;
}

const arr1=[1,2,6,7,8];
const arr2=[2,6,9,11,14,15];

const resultantArray = mergeArrays(arr1, arr2);
console.log(resultantArray);