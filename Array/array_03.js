// Reverse an array
let inputArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function reverseArray(array) {
  let arr = [...array];
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}

let reverse = reverseArray(inputArray);
console.log(reverse);
console.log(inputArray);

// Prefifx sum

function prefixSumArray(array) {
  let arr = [...array];
  let length = arr.length;
  let prefixArray = [arr[0]];
  for (let i = 1; i < length; i++) {
    prefixArray[i] = prefixArray[i - 1] + arr[i];
  }
  return prefixArray;
}

let prefixSum = prefixSumArray(inputArray);
console.log(prefixSum);
