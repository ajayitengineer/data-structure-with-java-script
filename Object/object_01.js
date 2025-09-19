//basics of object.
const obj = { name: "john", city: "NY" };

console.log(obj.name);
console.log(obj["city"]);
delete obj.city;

console.log(obj);

const obj2 = { nam: "John", city: "pune", state: "MH" };
console.log(obj2.hasOwnProperty("city"));
for (let key in obj2) {
  console.log(obj2[key]);
}
console.log(Object.keys(obj2));
console.log(Object.values(obj2));
console.log(Object.entries(obj2));

obj3 = {
  name: "John",
  city: "pune",
  info: function () {
    console.log(`name is ${this.name} and city is ${this.city}`);
  },
};

obj3.info();

const obj4 = { name: "john", city: "pune", state: "MH" };
const obj5 = obj4;
console.log(obj4 === obj5); // true;
obj5.city = "mumbai";
console.log(obj4);

obj6 = { ...obj4 };
console.log(obj4 === obj6); // false

obj6.city = "delhi";
console.log(obj4.city); // only change in obj6 but still it is shallow copy

// Object destructuring:

const data = { name: "john", role: "admin" };
const { name, role } = data;
console.log(name);
console.log(role);

//-------------------------------------------------------------------------------------------------------------------------------------

// Object.assign
const person = { name: "john", mobileNo: 837922 };
// Mutate way
const person2 = Object.assign(person); // mutate the original one
console.log(person === person2);

person2.name = "Paul";

console.log(person.name);

// non-mutate way
const emp = { name: "John", mobileNo: 837322 };
const emp2 = Object.assign({}, emp);
console.log(emp2 === emp); // false
emp2.name = "Paul";
console.log(emp.name); // not change

//------------------------------------------------------------------------------------------------------------------------------------

// Shallow copy vs deep copy

const user = {
  name: "john",
  mobileNo: 344666,
  address: { city: "mumbai", state: "MH" },
};

const user2 = Object.assign({}, user);
console.log(user2 === user); //false

user2.name = "Paul";
console.log(user.name); // still same as previous one

//but what if we change nested one

user2.address.city = "pune";

console.log(user.address.city); // now city is changed b/c it is shallow copy

// how to avoide it

// deep copy
user3 = structuredClone(user);

console.log(user === user3); // false

user3.address.city = "Delhi";

console.log(user.address.city);

//-----------------------------------------------------------------------------------------------------------------------------------
