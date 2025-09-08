let arr = [1, 3, 5, 7, 9];

// for loop

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (let value of arr) {
  console.log(value);
}

for (let index in arr) {
  console.log(index);
}

for (let [index, value] of arr.entries()) {
  console.log(index, value);
}

// Map (transform array into another array base input array not effected)
let mapArray = arr.map((item) => item * 2);
console.log(mapArray);
console.log(arr);

// foreach (perfrom some operation on each element of array, no return type base array not effected)

arr.forEach((item) => {
  console.log("hello world");
  console.log(item);
});

// filter (return all elements which satisfy a given condition)
let filterArray = arr.filter((item) => item > 4);
console.log(filterArray);

// find (return first element which satisfy a given condition)
let findArray = arr.find((item) => item > 5);
console.log(findArray);

// findIndex
let findIndex = arr.findIndex((item) => item > 5);
console.log(findIndex);

// findLastIndex
let findLastIndex = arr.findLastIndex((item) => item > 5);
console.log(findLastIndex);

// reduce (give a single result)
let reduce = arr.reduce((item, sum) => item + sum, 0);
console.log(reduce);

// reduce right (same as reduce but start from right)
let reduceRight = arr.reduceRight((item, sum) => item + sum, 0);
console.log(reduceRight);

// push
let sampleArray = [3, 7, 8, 2, 9, 1];

let push = sampleArray.push(5); // insert element at end of given array
console.log(push); // return length of new array

//pop
let pull = sampleArray.pop(); // remove an element from last of array
console.log(pop); // return removed element

// shift
let shift = sampleArray.shift(); // remove an element from start of array
console.log(shift); // return removed element

// unshift
let unshift = sampleArray.unshift(3); // add an element at begining of array
console.log(unshift); // return new length of array

// slice
let givenArray = [1, 4, 7, 8, 3, 9, 0, 2, 6];
let slicedArray = givenArray.slice(1, 4); // give portion of an array.
console.log(slicedArray); // slice(start,end) start include end not include.
console.log(givenArray); // given array not change.

// splice (use for add/remove from array)
// splice(start,deleteCount,[itemadd..]optional)
givenArray.splice(1, 0, 12, 14);
console.log(givenArray);
//delete element
givenArray.splice(1, 1);
console.log(givenArray);
// if deleteCount omited
givenArray.splice(2);
console.log(givenArray); // remove all elements from start

// toSpliced (not mutate version of splice)

// include
let array = [1, 3, 5, 7, 9, 2, 4, 6, 8, 5]; // check if a specfic index is there
console.log(array.includes(5));

//indexOf
let indexOf = array.indexOf(5);
console.log(indexOf);

//lastindexOf
let lastindexOf = array.lastIndexOf(5);
console.log(lastindexOf);

// flat
let nestedArray = [1, 2, 3, [4, 5, [6, 7, 8, [9, 10]]]];
let flatOnelevel = nestedArray.flat(1);
console.log(flatOnelevel);
let flatTwolevel = nestedArray.flat(2);
console.log(flatTwolevel);
let flatThreelevel = nestedArray.flat(3);
console.log(flatThreelevel);

// some (if at least one element satisfy given condition)
let array2 = [1, 5, 7, 8, 9, 10];
let some = array2.some((item) => item % 2 == 0);
console.log(some);

// every (if every element satisfy given condition)
let every = array2.every((item) => item % 2 == 0);
console.log(every);

// reverse (reverse array and mutatd it)
let reverse = array2.reverse();
console.log(reverse);

// sort (sort array and mutate it)
let sort = array2.sort((a, b) => a - b);
console.log(sort);

//toSorted (sort array but not mutate it)
let array3 = [15, 12, 3, 4, 5];
let toSorted = array3.toSorted((a, b) => a - b);
console.log(toSorted);
console.log(array3);

// toReversed (reverse array but not mutate it)
let toReversed = array3.toReversed();
console.log(toReversed);
console.log(array3);

//concat
let first = [1, 2, 3, 4];
let second = [5, 6, 7, 8];
let third = first.concat(second);

console.log(third);

// fill
let array4 = [1, 3, 5, 7, 9];
let fillArray = array4.fill(4); // replace all elements with a specfic value
console.log(fillArray);
console.log(array4); // mutates array

// join (convert array to string)(not mutate )
let array5 = [1, 2, 3, 4, 5];
let join = array5.join();
console.log(join);
console.log(typeof join);
console.log(array5);

// toString
let toString = array5.toString();
console.log(toString);

// toLocalString
let toLocal = array5.toLocaleString();
console.log(toLocal);

let array6 = [1, 3, 4, 5];
for (let num of array6.keys()) {
  console.log(num);
}

for (let num of array6.values()) {
  console.log(num);
}

for (let [key, value] of array6.entries()) {
  console.log(key, value);
}

// to check if given var is an array
console.log(Array.isArray(array6));

// spread
let [value1, value2] = array6;
console.log(value1);
console.log(value2);

// rest
let [value3, ...rest] = array6;
console.log(value3);
console.log(...rest);

// copy one array to anoter

let refArray = [4, 5, 8];
let copyArray = refArray; // copy by reference (change in one reflect it other)
console.log(refArray === copyArray); // true

let copybyRef = [...refArray]; // copy by reference (change in one doesn't second but this is shallow copy)
console.log(copybyRef === refArray); // false

let refArray2 = [1, 2, 3, [4, 5]];
let shallowCopy = [...refArray2];
console.log(refArray2 === shallowCopy); // false
shallowCopy[2] = 34; // nested element not mutated
console.log(refArray2);
console.log(shallowCopy);

shallowCopy[3][0] = 123; // mutate both array
console.log(refArray2);
console.log(shallowCopy);

// Deep copy
let refArray3 = [1, 2, 3, [4, 5]];
let deepCopy = structuredClone(refArray3);
deepCopy[3][1] = 124;
console.log(refArray3);
console.log(deepCopy);

let refArray4 = [1, 3, 6, [9, 7]];

let deepCopy2 = JSON.parse(JSON.stringify(refArray3));
deepCopy2[3][1] = 124;
console.log(refArray4);
console.log(deepCopy2);
//note -JSON.parse(JSON.stringify(...)) works but fails if the array contains functions, undefined, Date, or circular references.

//copywithin(index,start,end)

// mutate original array

// target → The index at which to copy the sequence to.

// start → The index at which to start copying elements from. (default = 0)

// end → The index at which to stop copying (non-inclusive). (default = arr.length)

let array7 = [1, 2, 3, 4, 5, 6];
let copywithin = array7.copyWithin(1, 3);

console.log(copywithin);

//with (non mutaed)
let array8 = [1, 3, 4, 5];
let withArray = array8.with(2, 88);
console.log(withArray);
console.log(array8);
console.log(array8 === withArray); // false

// prototype inheritence

console.log(Array.prototype);

Array.prototype.ajay = function () {
  if (this.length > 2) return true;
  return false;
};

let testArray = [1, 2, 3, 4, 5];
console.log(testArray.ajay());

//note - In real-world projects, extending Array.prototype is discouraged because it affects all arrays globally and can cause conflicts. For production, a utility function is better.
