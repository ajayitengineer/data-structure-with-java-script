// Most important this keyword

console.log(this);
//--------------------------------------------------------------------------------------------
// (1.) Arrow function can not use as constructor
function regularFunc(name) {
  this.name = name;
  console.log(this.name);
}

const data = new regularFunc("john");

const arrowFunc = (name) => {
  this.name = name;
  console.log(this.name);
};

// const data2 = new arrowFunc("paul"); (arrow function can't use a constructor)

//-----------------------------------------------------------------------------------------------
//(2.) Arrow function has no argumnents

function first(a, b, c) {
  console.log(arguments);
}
first(1, 3, 4);

// const second = (a, b, c) => {
//   console.log(arguments);
// };
// second();

//---------------------------------------------------------------------------------------------------
// (3.) Arrow function don't own their this .
const user = {
  name: "Ajay",
  regularFunc: function () {
    console.log("regular:", this.name);
  },
  arrowFunc: () => {
    console.log("arrow:", this.name);
  },
};

user.regularFunc(); // regular: Ajay
user.arrowFunc(); // undefined;

const person = {
  name: "john",
  hobbies: ["cricket", "tennis"],
  info: function () {
    this.hobbies.forEach(function (x) {
      console.log(this.name, x);
    });
  },
};
person.info();
