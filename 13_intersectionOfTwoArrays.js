// function to find intersection of two arrays

function findIntersection(arr1, arr2) {
  const result = [];

  for (let item of arr1) {
    if (arr2.includes(item)) {
      result.push(item);
    }
  }

  return result;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 6, 7, 8];

const intersection = findIntersection(arr1, arr2);
console.log(intersection);
