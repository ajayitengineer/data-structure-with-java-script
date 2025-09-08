# what is an array in java script ?

## In java script array is special type of object which can holds multiple data. Each data is called as element and element can access by their index (position).

# How to define array in java script ?

## const arr = []

- Array literal

## const arr = new Array(5)

- Array constructor arrayt of 5 empty elements

## const arr = Array.of(5)

- Array with one element with value 5

## const arr = Array.from([])

-- Array from other array

# Copy by Reference vs Copy by Value in JavaScript

## 1. Copy by Value (Primitive Types)

- **Primitive data types** in JavaScript → `String`, `Number`, `Boolean`, `null`, `undefined`, `Symbol`, `BigInt`.
- When you assign them to another variable, a **copy of the value** is created.
- Changing one does **not affect** the other.

### Example

```javascript
let a = 10;
let b = a; // copy value

b = 20;

console.log(a); // 10
console.log(b); // 20
```

## 2. Copy by Reference (Non primitive Types)

** There are two types **

- Shallow copy
- Deep copy

## Shallow copy

```javascript
let arr1 = [1, 2, 3];
let arr2 = [...arr1]; // spread operator

arr2.push(4);

console.log(arr1); // [1, 2, 3]
console.log(arr2); // [1, 2, 3, 4]
```

## Deep copy

```
let obj1 = { name: "Ajay", details: { age: 25 } };
let obj2 = JSON.parse(JSON.stringify(obj1));

obj2.details.age = 30;

console.log(obj1.details.age); // 25
console.log(obj2.details.age); // 30
```

```
const arr = [2, 3, 4, [7, 8]];

const arr2 = structuredClone(arr);

console.log(arr2);
console.log(arr == arr2); // false

arr2[3][0] = 45;
console.log(arr2);
console.log(arr);
```
