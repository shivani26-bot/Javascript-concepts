// create a memoization function
// what is memoized function
// A memoized function in JavaScript is a function that stores (or "caches") the results of expensive function calls and returns the cached result when the same inputs occur again. This technique improves performance by avoiding redundant computations.
// const addThreeNums=(a,b,c)=> a+b+c
// const add=memoize(addThreeNums)
// add(1,2,3)=>6
// add(1,2,3 )=>6 when we call same function with same parameter again , it should return the cached function instead of recomputing the results

const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    console.log("args", args);
    const key = JSON.stringify(args);
    console.log("key", key);
    if (key in cache) {
      console.log(`fetching from cache for args ${key}`);
      return cache[key];
    } else {
      console.log(`computing values for args ${key}`);
      console.log("this", this);
      const result = fn.apply(this, args);
      cache[key] = result;
      console.log(cache); //{ '[1,2,3]': 6 }
      return result;
    }
  };
};

// const addThreeNums = (a, b, c) => a + b + c;
// const add = memoize(addThreeNums);
// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3));
// console.log(add(4, 5, 6));
// console.log(add(4, 5, 6));

const factorial = memoize((x) => {
  if (x === 0) return 1;
  else return x * factorial(x - 1);
});

console.log(factorial(5));
console.log(factorial(6));

// flatten an array in javascript
// [[[1,[1.1]],2,3],[4,5]]
// output => [1, 1.1, 2, 3, 4, 5];
// in first call we have two elements : [[1,[1.1]],2,3],[4,5]
// if given element is array then make recursive call to same element
// [[1,[1.1]],2,3] here we have 3 elements
//       [[[1,[1.1]],2,3],[4,5]]
// [[1,[1.1]],2,3]      [4,5]
// [1,[1.1]] 2  3       4   5
// 1 [1.1]
//    1.1

// []+  f      +  f
//    f 2 3       4 5
//   1 f
//     1.1
// // recursive calls
// []+[1,1.1,2,3] +[4,5]
// []+[1,1.1,2,3,4,5]
// [1,1.1,2,3,4,5]

function flattenArray(arr) {
  return arr.reduce((preVal, currVal) => {
    if (Array.isArray(currVal)) {
      preVal = preVal.concat(flattenArray(currVal));
    } else {
      preVal.push(currVal);
    }
    return preVal;
  }, []);
}
console.log(
  flattenArray([
    [[1, [1.1]], 2, 3],
    [4, 5],
  ])
);

// First currVal: [[1, [1.1]], 2, 3]
// Array.isArray(currVal) is true.
// Recursive call: flattenArray([[1, [1.1]], 2, 3]).
// reduce starts iterating over arr.
// First currVal: [1, [1.1]]
// Array.isArray(currVal) is true.
// Recursive call: flattenArray([1, [1.1]]).
// reduce starts iterating over arr.
// First currVal: 1
// Array.isArray(currVal) is false.
// preVal.push(1): Result so far: [1].
// Second currVal: [1.1]
// Array.isArray(currVal) is true.
// Recursive call: flattenArray([1.1]).
// reduce starts iterating over arr.
// First currVal: 1.1
// Array.isArray(currVal) is false.
// preVal.push(1.1): Result so far: [1.1].
// Return [1.1] to the third call.
// Back to Third Call:
// preVal = [1].concat([1.1]): Result so far: [1, 1.1].
// Return [1, 1.1] to the second call.
// Back to Second Call:
// preVal = [].concat([1, 1.1]): Result so far: [1, 1.1].
// Next currVal: 2
// Array.isArray(currVal) is false.
// preVal.push(2): Result so far: [1, 1.1, 2].
// Next currVal: 3
// Array.isArray(currVal) is false.
// preVal.push(3): Result so far: [1, 1.1, 2, 3].
// Return [1, 1.1, 2, 3] to the first call.
// Back to First Call:
// preVal = [].concat([1, 1.1, 2, 3]): Result so far: [1, 1.1, 2, 3].
// Next currVal: [4, 5]
// Array.isArray(currVal) is true.
// Recursive call: flattenArray([4, 5])
// Fifth Function Call:
// reduce starts iterating over arr.
// First currVal: 4
// Array.isArray(currVal) is false.
// preVal.push(4): Result so far: [4].
// Second currVal: 5
// Array.isArray(currVal) is false.
// preVal.push(5): Result so far: [4, 5].
// Return [4, 5] to the first call.

// flatten object
function flattenObject(obj, parent) {
  const finalObj = {};
  const generateFlatObjects = (obj, parent) => {
    for (let key in obj) {
      const newParent = parent + key;
      const value = obj[key];
      if (typeof value === "object") {
        generateFlatObjects(value, newParent + ".");
      } else {
        finalObj[newParent] = value;
      }
    }
  };
  generateFlatObjects(obj, parent);
  return finalObj;
}
const obj = {
  a: "12",
  b: 23,
  c: {
    p: 23,
    o: {
      l: 56,
    },
    q: [1, 2],
  },
};

//  as we get the object we start appending the key to previous parent, as we get value we stop appending and assign that value to the key chain we formed
// if value is object then make the recursive call again
// if value is not object append value to the new parent just formed
console.log(flattenObject(obj, "")); //{ a: '12', b: 23, 'c.p': 23, 'c.o.l': 56, 'c.q.0': 1, 'c.q.1': 2 }
// {
//   a:12,
//   b:23,
//   c.p:23,
//   c.o.l:56,
//   c.q.0:1,
//   c.q.1:2
// }

// this keyword in javascript
// this refers to an Object
//  the value of this depends on how the function is invoked

// behaviour of this in a function: this refers to window Object
// behaviour of this in a object: this refers to the object

// arrow functions: arrow functions don't have a defined this. instead they treat it as a variable and they try to get the value lexically (inherit from parent scope)

const person = {
  name: "Vedant",
  getName: function () {
    return `${this.name} is my name`;
  },
};
console.log(person.getName()); //Vedant is my name

function test() {
  console.log(this); //window global object
}
test();

const person = {
  name: "Vedant",
  getName: () => {
    return `${this.name} is my name`;
  },
};
console.log(person.getName()); //undefined is my name

const fun = () => {
  const name = "shivani";
  const fun2 = () => {
    console.log(this.name); //undefined
  };
  fun2();
};
fun();
// Arrow functions always inherit this from where they are defined, not where they are called.
// fun function is defined in the global scope and is an arrow function. As such, this in fun is lexically bound to the this of its enclosing scope, which is the global object (in non-strict mode) or undefined (in strict mode).
// Inside fun, you define another arrow function fun2. The this in fun2 is lexically inherited from its parent, fun. Since this in fun already points to the global object (or undefined in strict mode), the this in fun2 will also point to the same value.

function fun() {
  const name = "shivani";
  const fun2 = () => {
    console.log(this.name); //undefined
  };
  fun2();
}
fun();
// The function fun is not invoked as a method of an object. Instead, it is invoked in the global scope (fun();).
// When a regular function is invoked in the global scope (non-strict mode), this refers to the global object (window in browsers, global in Node.js). In strict mode, this will be undefined.
// Since fun2 inherits this from fun, and this in fun refers to the global object, this.name tries to access name on the global object.
// In the global scope, you've defined const name = "shivani". However, this is not the same as this.name because variables defined with const or let do not become properties of the global object.
// Only variables defined with var or explicitly added to the global object (e.g., window.name = "shivani";) would be accessible as this.name
var name = "shivani";
function fun() {
  // const name = "shivani";
  const fun2 = () => {
    console.log(this.name); //shivani
  };
  fun2();
}

fun();

const name = "shivani";
function fun() {
  // const name = "shivani";
  const fun2 = () => {
    console.log(this.name); //undefined
  };
  fun2();
}

fun();

function User() {
  this.name = "john doe";
  this.score = 20;
  this.sayUser = function () {
    console.log(this.name); //john doe
    function innerFunction() {
      console.log(this.name); //undefined
    }
    innerFunction();
  };
}
let name = new User();
name.sayUser();

// User Constructor Function:
// When a function is called with new, it creates a new object, and this inside the constructor refers to that new object.
// this.name = "john doe"; sets the name property on the new object.
// this.score = 20; sets the score property on the new object.
// this.sayUser defines a method on the new object.
// When name.sayUser() is called, this inside the sayUser method refers to the object name because it’s invoked as a method of that object.
// innerFunction is a regular function (not an arrow function), defined inside sayUser.
// When innerFunction is called, it is invoked as a standalone function, not as a method of the name object.
// In a standalone function call:
// In non-strict mode, this refers to the global object (e.g., window in browsers or global in Node.js).
// In strict mode, this is undefined.

// how to fix above code
function User() {
  this.name = "john doe";
  this.score = 20;
  this.sayUser = function () {
    console.log(this.name); //john doe
    const innerFunction = () => {
      console.log(this.name); //john doe
    };
    innerFunction();
  };
}
let name = new User();
name.sayUser();

// currying in javascript
// creatte a curry function that accepts 5 arguments
const ARGS_LEN = 5;
const sum = (...args) => {
  if (args.length >= ARGS_LEN) {
    return args.reduce((prevVal, currVal) => prevVal + currVal, 0);
  } else {
    return function (...next) {
      return sum(...args, ...next);
    };
  }
};

// another way
// const ARGS_LEN = 5;
// const sum = (...args) => {
//   if (args.length >= ARGS_LEN) {
//     return args.reduce((prevVal, currVal) => prevVal + currVal, 0);
//   } else {
//     const recursiveFn = (...args2) => {
//       args = args.concat(args2);
//       if (args.length >= ARGS_LEN) {
//         return args.reduce((prevVal, currVal) => prevVal + currVal, 0);
//       } else return recursiveFn;
//     };
//     return recursiveFn;
//   }
// };
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2, 3, 4)(5));
console.log(sum(1)(2)(3)(4)(5));
console.log(sum(1, 2, 3)(4, 5));
console.log(sum(1, 2)(3, 4, 5));
console.log(sum(1)(2, 3, 4, 5));

//write a curry function that returns sum of previous values
const curryFn = () => {
  let prevSum = 0;
  // if nothing is provided then take 0
  return (newVal = 0) => {
    prevSum += newVal;
    return prevSum;
  };
};
const sum = curryFn();
console.log(sum(1));
console.log(sum(3));
console.log(sum(3));
console.log(sum(4));
console.log(sum());

// this refers to the context in which a function is called.

// Array.prototype.myMap = function (cb) {
//   let output = [];
//   for (let i = 0; i < this.length; i++) {
//     output.push(cb(this[i], i, this));
//   }
//   return output;
// };

// const nums = [1, 2, 3, 4, 5];
// console.log(
//   nums.myMap((num) => {
//     return num * 10;
//   })
// );

Array.prototype.myMap = function (cb) {
  let output = [];
  this.forEach((element, index) => {
    output.push(cb(element, index, this));
  });
  return output;
};

const nums = [1, 2, 3, 4, 5];
console.log(
  nums.myMap((num) => {
    return num * 10;
  })
);

// array should be not undefined, null
// if we don't pass initial value and array is also emty
Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

const numbers = [1, 2, 3, 4, 5];
console.log(
  numbers.myReduce((prevVal, currVal, i, numbers) => {
    return prevVal + currVal;
  }, 0)
);

// Array.filter
Array.prototype.myFilter = function (cb) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) output.push(this[i]);
  }
  return output;
};

const arr = [1, 2, 3, 4, 5];
console.log(
  arr.myFilter((num) => {
    return num > 2;
  })
);

// string.split()
const split = (string, delimiter) => {
  let output = [];
  if (delimiter === "") return Array.from(string);
  const startSplit = (str) => {
    if (!str) return;
    const index = str.indexOf(delimiter);
    if (index >= 0) {
      output.push(str.substring(0, index));
      startSplit(str.substring(index + delimiter.length));
    } else {
      output.push(str);
      //       The remaining string (str) is pushed to the output array.
      // No further calls to startSplit are made.
      // Natural Termination:

      // Since no recursive call happens in the else block, the recursion stops.
      // The previous recursive calls finish execution and return back up the stack
    }
  };

  startSplit(string);

  return output;
};

// [ 'The quick ', ' fox jumps ', ' lazy dog.' ]
console.log(split("The quick the fox jumps the lazy dog.", "the"));
// [
//   'T', 'h', 'e', ' ', 'q', 'u', 'i',
//   'c', 'k', ' ', 't', 'h', 'e', ' ',
//   'f', 'o', 'x', ' ', 'j', 'u', 'm',
//   'p', 's', ' ', 't', 'h', 'e', ' ',
//   'l', 'a', 'z', 'y', ' ', 'd', 'o',
//   'g', '.'
// ]
console.log(split("The quick the fox jumps the lazy dog.", ""));
// [
//   'The',   'quick',
//   'the',   'fox',
//   'jumps', 'the',
//   'lazy',  'dog.'
// ]
console.log(split("The quick the fox jumps the lazy dog.", " "));

//  map vs forEach
const arr = [1, 2, 3, 4, 5];
const mapResult = arr.map((arr) => {
  return arr * 2;
});

// const forEachResult = arr.forEach((arr) => {
//   return arr * 2;
// });
const forEachResult = arr.forEach((ar, i) => {
  arr[i] = ar * 2; //modifies the original array
});

console.log(mapResult, forEachResult, arr); //[ 2, 4, 6, 8, 10 ] undefined [ 2, 4, 6, 8, 10 ]

// we can chain other methods on map, but we can't do it with forEach
// map:
// Used to transform an array and return a new array with modified elements.
// Does not modify the original array.
// Since it returns a new array, it is chainable with other array methods like filter, reduce, etc.
// Does not modify the original array.

// forEach:
// Used to iterate over an array to perform operations on each element.
// Does not return anything (undefined).
// Not chainable because it returns undefined.
// Can be used to mutate the original array if needed

// return only name of students in capital
let students = [
  { name: "Piyush", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 30, marks: 83 },
  { name: "Kaushal", rollNumber: 37, marks: 85 },
  { name: "Shivani", rollNumber: 39, marks: 70 },
  { name: "Dilpreet", rollNumber: 35, marks: 60 },
  { name: "Dil", rollNumber: 33, marks: 50 },
  { name: "preet", rollNumber: 34, marks: 35 },
];
// let names = [];
// for (let i = 0; i < students.length; i++) {
//   names.push(students[i].name.toUpperCase());
// }

const names = students.map((student) => {
  return student.name.toUpperCase();
});
console.log(names); // [ 'PIYUSH', 'JENNY', 'KAUSHAL', 'SHIVANI', 'DILPREET' ]

// return only details of those who scored more than 70
const details = students.filter((student) => {
  return student.marks > 70;
});

console.log(details);

// sum of marks of all students
const total_marks = students.reduce((acc, curr) => {
  return acc + curr.marks;
}, 0);
console.log(total_marks);

// return only names of students who scored more than 60
const name_detail = students
  .filter((student) => student.marks > 60)
  .map((stu) => stu.name);
console.log(name_detail);

// return total marks for students with marks greater than 60  after 20 marks have been added to those who scored less than 60
const new_marks = students
  .map((student) => {
    if (student.marks < 60) {
      student.marks += 20;
    }
    return student;
  })
  .filter((student) => student.marks > 60)

  .reduce((acc, student) => {
    return acc + student.marks;
  }, 0);

console.log(new_marks);
