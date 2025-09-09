const sampleArray = [-25, -10, -3.5, 0, 5, 10, 15.2, 42, 10, -25, 42];

// find max
function findMax(arr) {
  let max = arr[0];
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      index = i;
    }
  }
  return { index, max };
}

let maxResult = findMax(sampleArray);
console.log(maxResult);

// find max
function findMin(arr) {
  let min = arr[0];
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      index = i;
    }
  }
  return { index, min };
}

let minResult = findMin(sampleArray);
console.log(minResult);

// Second max
function findSecondMax(arr) {
  let firstMax = -Infinity;
  let secondMax = -Infinity;
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    if (arr[i] > firstMax) {
      secondMax = firstMax;
      firstMax = arr[i];
    } else if (arr[i] > secondMax && arr[i] != firstMax) {
      secondMax = arr[i];
    }
  }
  secondMax = secondMax === -Infinity ? null : secondMax;
  return { firstMax, secondMax };
}

let secondMax = findSecondMax(sampleArray);
console.log(secondMax);

// Second min
function findSecondMin(arr) {
  let firstMin = Infinity;
  let secondMin = Infinity;
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    if (arr[i] < firstMin) {
      secondMin = firstMin;
      firstMin = arr[i];
    } else if (arr[i] < secondMin && arr[i] != firstMin) {
      secondMin = arr[i];
    }
  }
  secondMin = secondMin === Infinity ? null : secondMin;
  return { firstMin, secondMin };
}

let secondMin = findSecondMin(sampleArray);
console.log(secondMin);
