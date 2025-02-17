// Polyfill for map()
// map returns completely a new array
// Array.map((num, i, arr) => {});
// cb (callback function): This is the function that will be applied to each element of the array. It takes three parameters:

// this[i]: The current element in the array.
// i: The current index of the element.
// this: The array itself.

// Array.prototype is an object
// prototype adds myMap function to methods of the array
// It contains methods and properties that are shared by all arrays.
Array.prototype.myMap = function (cb) {
  // temporary array where the transformed elements will be stored.
  let temp = [];
  //   For each element, it calls the cb function with the current element (this[i]), its index (i), and the entire array (this). The result of the cb function is pushed into the temp array.
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};
// When nums.myMap() is called, the myMap function is executed in the context of nums. This means that inside myMap(), this refers to nums.

const nums = [1, 2, 3, 4];
const multiplyThree = nums.myMap((num, i, arr) => {
  return num * 3;
});
console.log(multiplyThree);
// First Iteration (i = 0):

// this[i] → 1 (the first element of nums)
// i → 0 (the index of the element)
// this → [1, 2, 3, 4] (the array itself)
// Callback function (cb) is executed: 1 * 3 = 3.
// Result (3) is pushed to temp, so temp becomes [3].
// Passing the callback:

// You call nums.myMap((num, i, arr) => { return num * 3; });
// The function (num, i, arr) => { return num * 3; } is passed as cb in myMap().
// Calling the callback inside myMap():

// During the first iteration of the for loop, this[i] is 1, i is 0, and this is [1, 2, 3, 4].
// Inside the loop, cb(this[i], i, this) is called as cb(1, 0, [1, 2, 3, 4]).
// The callback computes 1 * 3 = 3, which is pushed into the temp array

// polyfill for filter()
// filter() method in JavaScript is used to create a new array containing elements that pass a specific test or condition defined by a callback function. It doesn't modify the original array but returns a new one based on whether the condition is true for each element.
// array.filter(function(element, index, array) {
//     // return true or false
//   });

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }
  return temp;
};

const number = [1, 2, 3, 4];
const moreThanTwo = nums.myFilter((num) => {
  return num > 2;
});
console.log(moreThanTwo);

// polyfill for reduce()
// The reduce() method in JavaScript is used to apply a function to each element of an array and reduce the array to a single value. It processes the array from left to right, applying the callback function on each element, and accumulates the result into a single value (e.g., sum, product, concatenation).
// array.reduce(function(accumulator, currentValue, index, array) {
//     // return the updated accumulator
//   }, initialValue);
// accumulator: The accumulated result from the previous iterations (or the initial value, if provided).
// currentValue: The current element being processed in the array.
// index (optional): The index of the current element.
// array (optional): The array on which reduce() is called.

Array.prototype.myReduce = function (cb, initialValue) {
  var accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    // if user fails to give initial value it will consider first element of array as initialValue
    // current value is second element of array
    // check accumulator already has initialvalue or not, if it doesn't have then assign the first element of array as initialvalue

    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

const num = [1, 2, 3, 4];
const sum = num.myReduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);
console.log(sum);

// implement caching/memoize function
// const clumsyproduct = (num1, num2) => {
//   for (let i = 1; i <= 100000000; i++) {}

//   return num1 * num2;
// };
// console.time("first call");
// console.log(clumsyproduct(9467, 7649));
// console.timeEnd("first call");
// console.time("second call");
// console.log(clumsyproduct(9467, 7649));
// console.timeEnd("second call");

// in order to minimize time for same parameters we have to cache the result of previous function somewhere
function myMemoize(fn, context) {
  // result for previously executed function will be stored here
  const res = {};
  return function (...args) {
    var argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      // use context if any context is sent
      //   context is optional
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache];
  };
}

// res={
//     "5,6":30,
// };

const clumsyproduct = (num1, num2) => {
  for (let i = 1; i <= 100000000; i++) {}
  return num1 * num2;
};

const memoizedClumzyProduct = myMemoize(clumsyproduct);
console.time("first call");
console.log(memoizedClumzyProduct(9467, 7649));
console.timeEnd("first call");
console.time("second call");
console.log(memoizedClumzyProduct(9467, 7649));
console.timeEnd("second call");

// call , bind and apply in javascript(explicit binding)
// polyfill for call method
let car1 = {
  color: "red",
  company: "ferrari",
};
function purchaseCar(currency, price) {
  console.log(
    `I hve purchased ${this.color} - ${this.company} car for ${currency}${price}`
  );
}
// purchaseCar.call(car1, "$", "12356");
// we make a call for call method on function, hence function.prototype
Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "It's not callable");
    // this inside myCall refers to the function purchaseCar because myCall is being invoked on purchaseCar.
    // this always refers to the context in which method is called. here mycall method is attached to function hence this will point to function
    // this in myCall always refers to the context in which the method is called. Here myCall is attached to Function.prototype, so this will point to the function.
  }
  // create a fuction inside context object
  context.fn = this; //now the function is attached as a method of object
  context.fn(...args);
};
purchaseCar.myCall(car1, "$", "12356");

//
// polyfill for apply
let car1 = {
  color: "red",
  company: "ferrari",
};
function purchaseCar(currency, price) {
  console.log(
    `I hve purchased ${this.color} - ${this.company} car for ${currency}${price}`
  );
}
// purchaseCar.call(car1, "$", "12356");
// we make a call for call method on function, hence function.prototype
Function.prototype.myApply = function (context = {}, argsArray = []) {
  if (typeof this !== "function") {
    throw new Error(this + "It's not callable");
    // this always refers to the context in which method is called. here mycall method is attached to function hence this will point to function
  }
  if (!Array.isArray(argsArray)) {
    throw new TypeError("CreateListFromArrayLike called on non-object");
  }
  // create a fuction inside context object
  context.fn = this; //now the function is attached as a method of object
  context.fn(...argsArray);
};
purchaseCar.myApply(car1, ["$", 12356]);

// polyfill for bind
let car1 = {
  color: "red",
  company: "ferrari",
};
function purchaseCar(currency, price) {
  console.log(
    `I hve purchased ${this.color} - ${this.company} car for ${currency}${price}`
  );
}

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "can't be bound as it's not callable");
  }

  context.fn = this;
  console.log("this", this);
  return function (...newArgs) {
    // because we provide arguments later to the function  newFunc("$", 12345)
    return context.fn(...args, ...newArgs);
  };
};
// const newFunc = purchaseCar.bind(car1);
// console.log(newFunc); //returns function purchaseCar accepting currency and price
// newFunc("$", 12345);

// const newFunc = purchaseCar.myBind(car1, "$", 12345);
// console.log(newFunc());

// const newFunc = purchaseCar.myBind(car1);
// console.log(newFunc); //returns function purchaseCar accepting currency and price
// newFunc("$", 12345);

const newFunc = purchaseCar.myBind(car1, "$");
console.log(newFunc); //returns function purchaseCar accepting currency and price
newFunc(12345);

// once polyfill
// library lodash has once implementation
// ensures that a given function can only be executed once. After the first call, any subsequent calls to the function will simply return the result of the first execution and will not execute the function again.

// const hello = () => console.log("hello");
// hello(); //hello
// hello(); //hello
// hello(); //hello
// hello(); //hello

// func: The function to be executed only once.
// context: Optional parameter to set the this value for func.
function once(func, context) {
  console.log(func); //(a, b) => console.log("hello", a, b)
  let ran;
  //closure
  // Return Value:
  // A new function (closure) that will execute func only once, no matter how many times it is called.
  return function () {
    if (func) {
      //Variable that stores the result of calling func for the first time.
      // If func exists, it is executed with the provided context (or this if no context is provided) and arguments (the arguments passed to the returned function).
      console.log(arguments);
      // context is undefined, so this refers to the global object (or undefined in strict mode).
      // arguments refers to [1, 2], the arguments passed to hello.
      ran = func.apply(context || this, arguments);
      // func.apply(this, [1, 2]) executes the function (a, b) => console.log("hello", a, b) with arguments 1 and 2.
      func = null; //so that we can't run this again. After the first call, func is set to null to prevent further execution.
    }
    return ran;
  };
}
// const hello = once(() => console.log("hello"));

// output: hello
// hello();
// hello();
// hello();
// hello();

const hello = once((a, b) => console.log("hello", a, b));
// output: hello 1 2
hello(1, 2);
hello(1, 2);
hello(1, 2);
hello(1, 2);
hello(1, 2);
