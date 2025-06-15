// let arr = [-4,-1,1,2,3];
// arr =[1,2,3,4,5];

// find first smallest missing positive;
// output -> 2
// output -> 6;

function findFirstMissingPositive(arr) {
  let sorted = arr.sort((a, b) => a - b);
  let negativeCount = 0;

  for (let item of sorted) {
    if (item < 0) {
      negativeCount += 1;
    }
  }

  for (let i = negativeCount + 1; i < sorted.length; i++) {
    if (sorted[i] - sorted[i - 1] > 1) {
      return sorted[i - 1] + 1;
    }
  }
  return sorted[sorted.length - 1] + 1;
}

let arr = [-4, -1, 1, 2, 3, 4];
let result = findFirstMissingPositive(arr);
console.log(result);
