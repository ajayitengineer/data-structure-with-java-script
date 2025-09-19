// Advance level

//------------------------------------------------------------------------------------------------------------
// (1.) Nested object vs optional chaining
const person = {
  name: "john",
  mobileNo: 34444,
  address: {
    city: "pune",
    state: "MH",
  },
};

console.log(person.address.country); // undefined
//console.log(person.address.country.code); //error (type error)
console.log(person.address.country?.code); // undefined
//--------------------------------------------------------------------------------------------------------------
// (2.) Object.freeze() vs Object.seal()
// Object.freeze() not allow to update , delete or add
// Object.seal() allow update only delte and add not possible
const emp = { name: "john", city: "pune" };
Object.freeze(emp);
emp.name = "x";
console.log(emp.name);

const emp2 = { name: "paul", city: "pune" };
Object.seal(emp2);
emp2.name = "Phill";
console.log(emp2.name);

//---------------------------------------------------------------------------------------------------------------

// (3.) Object.defineProperty()
const car = {};
Object.defineProperty(car, "model", {
  enumerable: false, // not show in loop
  writable: true, // can update
  configurable: false, // can not delte
});

// we can define also getters and setters
const student = { name: "manny", school: "AVM" };
Object.defineProperty(student, "info", {
  get() {
    return `${this.name} and school is ${this.school}`;
  },
});

console.log(student.info);

//-----------------------------------------------------------------------------------------------------------------
// (4.) Prototype inheritence

const first = {
  name: "Manny",
  mobileNo: 354545,
};

const second = Object.create(first);
console.log(second === first);

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  return `Animal name is ${this.name} and make sound`;
};

const dog = new Animal("dog");
const value = dog.speak();
console.log(value);
//---------------------------------------------------------------------------------------------------------------------

// (5.) this,call,bind,apply

// this -> current object with context

const friend = { name: "luke", city: "NA" };

function greet(message, number) {
  console.log(
    `${message} my name is ${this.name} i am from ${this.city} and my number is ${number}`
  );
}

greet.call(friend, "hello world", 9383);
greet.apply(friend, ["hello world", 3344]);
const data = greet.bind(friend, "hello world", 8373);
data();

//-----------------------------------------------------------------------------------------------------------------------
