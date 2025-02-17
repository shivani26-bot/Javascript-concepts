// for in loop is used to iterate through the objects

// create a simple object
const person = {
  name: "shivani",
  age: 24,
};
console.log(person);

// access the object properties
console.log(person.name);
console.log(person.age);

// update the object properties
person.name = "Shruti";
console.log(person.name);
console.log(person);

// add a new property to object
person.city = "Bihar";
console.log(person);

// delete a property from an object
delete person.age;
console.log(person.age);
console.log(person);

// check if property exists in an object
console.log("name" in person);
console.log("age" in person);

// loop through object properties
for (const key in person) {
  console.log(key, person[key]);
}

// nested objects
const employee = {
  name: "Shivam",
  address: {
    city: "Delhi",
    Pincode: "12345",
  },
};

console.log(employee);
console.log(employee.address.city);
console.log(employee.address.Pincode);

// merge two objects
// Object.assign() invokes the getters on the source objects and setters on the target. It assigns properties only
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 2, d: 3 };
// const mergeObject = Object.assign({}, obj1, obj2);
const mergeObject = { ...obj1, ...obj2 };
console.log(mergeObject);

// copy an object
const original = { x: 10, y: 20 };
// const copy = Object.assign({}, original);
const copy = { ...original };
console.log(copy);

// object destructuring
const { name, city } = person;
console.log(name);
console.log(city);

// computed or dynamic property names
// allows you to dynamically define the names of object properties using expressions or variables.
//  This feature is particularly useful when the property name needs to be determined at runtime.
let prop = "age";
const user = {
  [prop]: 25,
};
console.log(user.age);

let key = "username";
let value = "shivani";
const user2 = {
  [key]: value,
};
console.log(user2);
// function inside object or this keyword in object methods
// behavior of this is different between regular functions and arrow functions
// Regular Functions
// this refers to the object that the function is a method of.This means that when you call a method on an object,
// this inside the method refers to the object itself.
const car = {
  brand: "Toyata",
  getBrand: function () {
    return this.brand;
  },
};
console.log(car.getBrand());

// arrow function as object
// Arrow functions do not have their own this context. Instead, they inherit this from the surrounding lexical context at the time
// they are defined.This means that this inside an arrow function is determined by where the arrow function is defined,
// not where it is called.
// The arrow function () => {} is defined within the object literal but does not bind its own this.
// this inside the arrow function refers to this from the surrounding context (lexical scope).
// Lexical Scope:

// The surrounding context where user1 is defined is likely the global scope or a parent function scope.
// In the global scope, this typically refers to the global object (window in browsers or global in Node.js),
// which usually does not have a name property
const user1 = {
  name: "shivani",
  greet: () => {
    console.log("Hii, " + this.name);
  },
};
user1.greet();

// object.keys() method
// returns an array of the property names an object has
const keys = Object.keys(person);
console.log(keys);

// object.values() method
// allows you to return an array of own enumerable property’s values of an object.
const values = Object.values(person);
console.log(values);

// before object.values, we also used for in loop with hasOwnProperty
for (const key in person) {
  if (person.hasOwnProperty(key)) {
    const value = person[key];
    console.log(value);
  }
}

// Object.entries()
// accepts an object and returns its own enumerable string-keyed property [key, value] pairs of the object.
const entries = Object.entries(person);
console.log(entries);

// using constructor function to create objects
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person1 = new Person("Shivani", 23);
const person2 = new Person("Shivam", 30);
console.log(person1);
console.log(person2);

// prototype property
// It is used to add properties and methods to constructor functions so that all instances created by that constructor
//  share those properties and methods.
// Constructor Functions and Prototypes
// When you define a function in JavaScript, a prototype property is automatically created for that function.
// This property is an object that can be used to share methods and properties among instances of the constructor function.
Person.prototype.greet = function () {
  console.log("Hello " + this.name);
};
person1.greet();

console.log(Person.prototype); // Person.prototype ka mtlb hai Person ki prototype property print krna
// __proto__ btata hai ki kya prototype hai jisse ye object bna hai
// jaise hi hm ekk function ya constructor define krte hai toh uska ekk prototype property define hota hai jo ki ekk object hota hai jisme
//  saare property or methods hote hai uss function ke, aur jb hm koi object create krne ki koshish krenge uss function ka
// toh wo object uss function ke prototype ke adhar pe bnega mtlb uss object mei wo saare properties or methods honge jo uss
// function ke prototype property mei hai
// person1.__proto__ (Person.prototype) ---> Person.prototype.__proto__ (Object.prototype) ---> Object.prototype.__proto__ (null)
// console.log(Person.prototype.__proto__ === Object.prototype); //true
// console.log(Object.prototype.__proto__); // null

// In JavaScript, Object is the base constructor for all objects. All objects inherit from Object.prototype if not otherwise specified.
// Therefore, the prototype of Person.prototype (i.e., Person.prototype.__proto__) is Object.prototype.
// Since Object is the base object from which all other objects inherit, its prototype is null.
// This is the end of the prototype chain, indicating that there are no further objects up the chain.
console.log(person1.__proto__);

// object.create() method
// creates a new object, using an existing object as the prototype of the newly created object.
const proto = {
  greet: function () {
    console.log("Hello");
  },
};
let obj = Object.create(proto);
obj.name = "cow"; //"name" is a property set on "obj", but not on "proto"
// we can also overwrite the inhherited properties in obj
obj.greet();

// Object.freeze()
// const keyword prevents you from overwriting an object, but it does not prevent you from changing an object's properties.
// const obj = { answer: 42 };
// // You **cannot** overwrite `obj` by assigning to it. This code
// // throws an error "assignment to constant variable"
// obj = { answer: 41 };

// The Object.freeze() function "freezes" an object. JavaScript prevents you from adding, removing, or modifying the
//  properties of a frozen object.

const frozenObj = Object.freeze({ answer: 41 });
frozenObj.answer = 43; //not ok
frozenObj.name = "abc"; //not ok
delete frozenObj.answer; //not ok
console.log(frozenObj.answer); //41
console.log(frozenObj);

// Object.seal();
// similar to the Object.freeze() function, with one key difference: you can still write to existing properties on a
// sealed object, but you cannot write to a frozen object.
const sealObj = Object.seal({ answer: 41 });
sealObj.answer = 43; //ok
sealObj.name = "abc"; //not ok
delete sealObj.answer; //not ok
console.log(sealObj.answer); //43
console.log(sealObj);

// creating methods in object
const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
};
console.log(calculator.add(5, 4));
console.log(calculator.subtract(5, 1));

// object property short hand
const foodType = "snack";
const dietarian = "vegetarian";
const food = { foodType, dietarian };
console.log(food);

// spread operator with objects
let user11 = { a: 1, b: 2 };
let user12 = { c: 2, d: 3 };

let mergedUser = { ...user11, ...user12 };

console.log(mergedUser); // {a: 1, b: 2, c: 2, d: 3}

// let user11 = { a: 1, b: 2 };
// let user12 = { b: 2, d: 3 };
// let mergedUser = { ...user11, ...user12 };
// console.log(mergedUser); // { a: 1, b: 2, d: 3 }

// factory function to create objects
// A factory function is a function that returns a new object.
// let person3 = {
//   firstName: "shivani",
//   lastName: "kumari",
//   getfullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };
// let person4 = {
//   firstName: "shivam",
//   lastName: "kumar",
//   getfullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };
// person1 and person2 objects have the same properties and methods.
// The problem is that the more objects you want to create, the more duplicate code you have.
// To avoid copying the same code all over again, you can define a function that creates the person object:
function createPerson(firstName, lastName) {
  return {
    // firstName: firstName,
    // lastName: lastName,
    firstName,
    lastName,
    getFullName() {
      return firstName + " " + lastName;
    },
  };
}
let person3 = createPerson("shivani", "kumari");
let person4 = createPerson("shivam", "kumar");
console.log(person3.getFullName());
console.log(person4.getFullName());

// chaining object methods
// Method chaining in JavaScript is a programming pattern where multiple methods are called on the same object in a single statement, one after the other.
// Each method call returns an object, often the same object it was called on, allowing subsequent methods to be called on that same object.
// To enable method chaining, each method in the chain must return the same object (usually this). This allows the next method in the chain to be called on
// that object.
const calculator1 = {
  result: 0,
  add(value) {
    this.result += value;
    return this;
  },
  subtract(value) {
    this.result -= value;
    return this;
  },
};
// Each method  returns this, which is the current instance of the calculator1 object. This is crucial for enabling method chaining.

calculator1.add(5).subtract(3);
console.log(calculator1.result);

// Object.defineProperty
// Object.defineProperty() is a method in JavaScript used to define a new property directly on an object, or modify an existing property,
// and return the object. This method allows for detailed control over the behavior of the properties.
// Object.defineProperty(obj, prop, descriptor);
// obj: The object on which to define the property.
// prop: The name of the property to be defined or modified.
// descriptor: The descriptor for the property being defined or modified.
// Property Descriptor
// The property descriptor is an object that describes the behavior of the property. It can have the following attributes:
// value
// writable
// enumerable:whether a property of an object can be iterated over in loops that iterate over properties, such as for...in loops or functions like Object.keys(), Object.values(), and Object.entries().
// Enumerable Property
// By default, properties defined directly on an object are enumerable.
const obj3 = { a: 1, b: 2, c: 3 };

for (let key in obj3) {
  console.log(key); // a, b, c
}

console.log(Object.keys(obj3)); // ["a", "b", "c"]
// Non-Enumerable Property
// You can define a property as non-enumerable using Object.defineProperty().
const obj4 = {};
Object.defineProperty(obj4, "a", {
  value: 1,
  enumerable: true,
});
Object.defineProperty(obj4, "b", {
  value: 2,
  enumerable: false,
});
for (let key in obj4) {
  console.log(key); //a
}
console.log(Object.keys(obj4)); //[ 'a' ]
console.log(Object.values(obj4)); //[ 1 ]
console.log(Object.entries(obj4)); //[ [ 'a', 1 ] ]
// Property a is enumerable, so it shows up in both the for...in loop and Object.keys().
// Property b is non-enumerable, so it does not show up in the for...in loop or Object.keys(), but it is still accessible directly through obj.b.
const user5 = {
  firstName: "John",
  lastName: "Doe",
};
Object.defineProperty(user5, "fullName", {
  get() {
    return this.firstName + " " + this.lastName;
  },
  set(value) {
    // const [firstName, lastName] = value.split(" ");
    // this.firstName = firstName;
    // this.lastName = lastName;
    [this.firstName, this.lastName] = value.split(" ");
  },
  enumerable: true,
});
console.log(user5.fullName);
user5.fullName = "Alice wonderland";
// console.log(user5.firstName);
// console.log(user5.lastName);
console.log(user5.fullName);

// configurable
// get
// set

// converting an object to json
const jsonString = JSON.stringify(person);
console.log(jsonString);

// parsing an json string into an object
const jsonString1 = '{"name":"Shruti","city":"Bihar"}';
const jsonObject = JSON.parse(jsonString1);
console.log(jsonObject);

// Object.entries() with for of loop
// we use for of loop to iterate over arrays or string, Object.entries() output is array only
let person5 = { name: "shivani", age: 23 };
console.log(Object.entries(person5));
for (let [key, value] of Object.entries(person5)) {
  console.log(`${key}:${value}`);
}

// Object.fromEntries()
// method to transform a list of key-value pairs into an object.
// Object.entries() method that allows you to transform an object into an array:
const entries1 = [
  ["name", "shivani"],
  ["age", 25],
];
const person6 = Object.fromEntries(entries1);

console.log(person6);

// using a symbol as a key
// Symbol as a new primitive type. Unlike other primitive types such as number, boolean, null, undefined, and string, the symbol type doesn’t
// have a literal form.

// Symbol() function creates a new unique value each time you call it:
console.log(Symbol() === Symbol()); //false

// To create a new symbol, you use the global Symbol() function
// Symbol() function accepts a description as an optional argument. The description argument will make your symbol more descriptive.
let sym = Symbol("id");
console.log(sym);
// symbols are primitive values, you can use the  typeof operator to check whether a variable is a symbol.
console.log(typeof sym);
// symbol is a primitive value, if you attempt to create a symbol using the new operator, you will get an error
// let s = new Symbol();//error
// Using a symbol as the computed property name of an object
const obj5 = {
  [sym]: 123,
};
console.log(obj5[sym]);

// object literal enhancement
// provides a more concise and readable way to create objects in JavaScript. This feature includes shorthand properties, method definitions,
// and computed property names
const name1 = "shivani";
const age1 = "23";
// before es6
const person7 = {
  name1: name1,
  age1: age1,
  sayHello: function () {
    console.log("hello");
  },
};
// after es6
const prop1 = "profession";
const value1 = "Engineer";
const person8 = {
  name1,
  age1,
  [prop1]: value1,
  sayHello() {
    console.log("hello");
  },
};
console.log(person7);
person7.sayHello();
console.log(person8);
person8.sayHello();
console.log(person8.profession);

// object destructuring with default value
let person9 = { name2: "John" };
const { name2, age = 30 } = person9;
console.log(name2, age);

// object destructuring with rest operator
// A rest parameter allows you to represent an indefinite number of arguments as an array.
// function fn(a, b, ...args) {
//   //...
// }
// The last parameter (args) is prefixed with the three dots ( ...). It’s called a rest parameter ( ...args).
// All the arguments you pass to the function will map to the parameter list.
// In the syntax above, the first argument maps to a, the second one maps to b, and the third, the fourth, etc.,
//  will be stored in the rest parameter args as an array.
// fn(1, 2, 3, "A", "B", "C");
// args array stores :
// [3,'A','B','C']
// the rest parameters must appear at the end of the argument list
// The following code will result in an error:

// function fn(a,...rest, b) {
// error
// }

// Spread Operator
// The spread operator is used to expand or spread elements of an iterable (like an array or a string) or
// properties of an object into individual elements or properties.

// Rest Operator
// The rest operator is used to collect multiple elements into a single array or object. It is commonly used in
// function parameters to gather remaining arguments into an array, or in object destructuring to gather remaining properties
// into a new object.

const person10 = { name3: "alice", city: "bangalore" };
let { name3, ...rest } = person10;
console.log(name3);
console.log(person10);
const [first, ...rest1] = [1, 2, 3, 4, 5];

console.log(first); // 1
console.log(rest1); // [2, 3, 4, 5]

// checking if a key exists using hasOwnProperty
console.log(person10.hasOwnProperty("name"));
console.log(person10.hasOwnProperty("name3"));

// enumerate properties with Object.getOwnPropertyNames
const properties = Object.getOwnPropertyNames(person10);
console.log(properties);

// Object.preventExtensions()
// prevents new properties from being added to an object. It doesn't affect existing properties of the object; they can
//  still be modified or deleted.
const obj6 = { a: 1 };
Object.preventExtensions(obj6);
obj6.b = 1;
console.log(obj6.b); //undefined

// Object.isExtensible()
// checks whether an object is extensible, meaning whether new properties can be added to it.
console.log(Object.isExtensible(person10));
Object.preventExtensions(person10);
console.log(Object.isExtensible(person10));

// setting a prototype with Object.setPrototypeOf
// sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null.
// This method allows for dynamic changes to the prototype chain
// Object.setPrototypeOf(obj, prototype);
// obj: The object of which the prototype is to be set.
// prototype: The object's new prototype (an object or null).
const animal = { eats: true };
const rabit = {};
console.log(Object.getPrototypeOf(rabit)); //[Object: null prototype] {}
Object.setPrototypeOf(rabit, animal);
console.log(rabit.__proto__);
console.log(rabit.eats);

// using a getter to compute a property
const rectanle = {
  length: 10,
  width: 5,
  get area() {
    return this.length * this.width;
  },
};
console.log(rectanle.area);

// using setter to set property
const employee1 = {
  firstName: "John",
  lastName: "Doe",
  set fullName(value) {
    // const [firstName, lastName] = value.split(" ");
    // this.firstName = firstName;
    // this.lastName = lastName;
    [this.firstName, this.lastName] = value.split(" ");
  },
};

employee1.fullName = "Alice wonderland";
console.log(employee1.firstName);

// creating an object with null prototype
const newObject = Object.create(null);
console.log(Object.getPrototypeOf(newObject));
