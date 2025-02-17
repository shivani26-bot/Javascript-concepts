// Precedence	 Operator	                        Description	                                      Associativity
// 1	          ()	                            Grouping (Parentheses)	                          Left-to-right
// 2	          . , [], ()	                    Member Access, Array Indexing, Function Call	  Left-to-right
// 3	          new (with arguments)	            Object Creation	                                  Right-to-left
// 4	          ++ , --	                        Postfix Increment/Decrement	                      Left-to-right
// 5	          ++ , -- , + , - , !, ~, typeof	Prefix Increment/Decrement, Unary Operators	      Right-to-left
// 6	          **	                            Exponentiation	                                  Right-to-left
// 7	          * , / , %	                        Multiplication, Division, Modulus	              Left-to-right
// 8	          + , -	                            Addition, Subtraction	                          Left-to-right
// 9	          <<, >>, >>>	                    Bitwise Shift Operators                        	  Left-to-right
// 10	          <, >, <=, >=, in, instanceof	    Relational Operators	                          Left-to-right
// 11	          ==, !=, ===, !==	                Equality Operators	                              Left-to-right
// 12	          &	                                Bitwise AND	                                      Left-to-right
// 13	          ^	                                Bitwise XOR	                                      Left-to-right
// 14	          `	`	                            Bitwise OR
// 15	          &&	                            Logical AND	                                      Left-to-right
// 16	          `		                             `
// 17	          ??	                            Nullish Coalescing	                              Left-to-right
// 18	          ? :	                            Conditional (Ternary)	                          Right-to-left
// 19	          =, +=, -=, *=, etc.	            Assignment Operators	                          Right-to-left
// 20	          ,	                                Comma Operator	                                  Left-to-right
console.log(1 + 9 ** 2); //82

let arr = ["baby", "i", "love", "you"];
delete arr[0];
console.log(arr.length); //4
// explanation : delete operator on an array element in JavaScript, it removes the value of the element
// but does not affect the length of the array. Instead of shifting the remaining elements,
//  it leaves an empty "hole" in the array.

let fruits = ["apple", "banana", "orange"];
console.log(fruits.length); //3

console.log(3 > 2 === 1); //false
// explain: comparison > has a higher precedence than the strict equality ===
// true === 1;
// === operator checks both value and type.true is a boolean and 1 is a number, types are different.

let str = "Hello";
str[0] = "h";
console.log(str); //Hello
// explain: strings are immutable in nature, we can't modify them,once a string is created, its characters cannot be changed directly.

let fruits1 = ["apple", "banana", "orange"];
fruits1[3] = "mango";
console.log(fruits1.length); //4

let result = Math.floor(Math.random() * 5);
console.log(result); // 0 to 4 inclusive
// explain: Math.random(): This generates a random floating-point number between 0 (inclusive) and 1 (exclusive)
// The result of Math.random() is then multiplied by 5. This scales the random number to a range between 0 and 5 (but not including 5)
// Math.floor(): This function rounds down the floating-point number to the nearest integer. It will always round down to the largest integer less than or equal to the result.
//  For example:
// If Math.random() returns 0.75, multiplying by 5 gives 3.75, and Math.floor(3.75) gives 3.
// If Math.random() returns 0.12, multiplying by 5 gives 0.6, and Math.floor(0.6) gives 0.

let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4];
console.log(arr2); //[1,2,3,4]

let num = 5;
console.log(num++); //5
console.log(num); //6
// explain: ++ operator is being used as a post-increment
// num++ first returns the current value (5), and then increments the value.
// The final value of num is 6

const numbers = [1, 2, 3, 4, 5];
const [first, , third, ...rest] = numbers;
console.log(first, third, rest); //1,3,[4,5]
// explain: [first,,third,...rest]=[1,2,3,4,5]

let x = 1;
let y = x++ - x;
console.log(y); // 1-2=-1

count = 1; // Global variable set to 1
var count = 0; // Global variable re-declared with 'var' and set to 0
function counter() {
  return count++; // Post-increment: return the current value, then increment
}
console.log(counter()); // Output: 0

// const z = 10;
// if ((z = 0)) {
//   console.log(z); //error, assignment to const variable
// }

let [a = 2] = [undefined, 1];
console.log(a); //2
// explain: The variable a is given a default value of 2 in case the destructured value is undefined.
// Since the first element of the array is indeed undefined, the default value 2 is assigned to a.
// let [a = 2] = [undefined, 1]: you are using array destructuring to assign values to a from the array on the right-hand side.

const obj = {
  name: "Alex",
  name: "John",
};
console.log(obj.name); //john
// explain: In JavaScript, object properties must have unique keys. If you define multiple properties with the same key in an object,
// the last one defined will overwrite the previous ones.

const arr3 = [1, 2, 3, null];
const removed = arr3.pop();
console.log(removed); //null
// explain ;.pop() method in JavaScript removes the last element from an array and returns that element.
//  After removing the last element, the array length is reduced by one.

const arr4 = [];
const func = function () {
  return arr4;
};
console.log(typeof func()); //object,
// explain: function returns an Array, type of array in javascript is object

console.log(isNaN(NaN)); //true
console.log(isNaN("string")); //true
// explain: isNaN() function checks if a value is not a number. It converts the value to a number (if possible),
//  and if the result is NaN (Not-a-Number), it returns true. Otherwise, it returns false.
//  NaN is a special value in JavaScript that stands for "Not-a-Number."
//  NaN is literally not a number.
//  "string" cannot be converted to a number.
// JavaScript tries to convert the string to a number, but since it is not a valid number, it results in NaN.

const value = ' "" ';
console.log(Boolean(value)); //true
// explain: Since ' "" ' is a non-empty string (it contains characters, even if they are whitespace and quotes),
//  Boolean(value) evaluates to true.

let b = 0;
while ((b++ < 5, b < 3)) {
  console.log(b); //1,2
}
// expolin: The comma operator evaluates the first expression (b++ < 5), discards its result, and then evaluates the second expression (b < 3), which is what determines whether the loop continues.
// The increment (b++) happens before the comparison to 3.

const arr5 = [1, 2, 3];
const removed1 = arr5.shift();
console.log(arr5); //[2,3]
// explain: shift() method removes the first element from an array and returns that element.
// After calling shift(), the remaining elements are shifted one position to the left.
// Removed Element:
// In this case, arr5.shift() removes 1 from the array and assigns it to the variable removed1.
// Updated Array:
// After the operation, arr5 now contains [2, 3], as the first element 1 has been removed.
// shift() method alters the original array
// push(): Adds elements to the end of an array. returns the new length of the array.
// pop(): Removes the last element from an array. returns that element. This method changes the length of the array.
// shift(): Removes the first element from an array. returns that element. This method also changes the length of the array.
// unshift(): Adds elements to the beginning of an array. returns the new length of the array.

console.log(1 + "1"); // "11" - Number is coerced to a string and concatenated.
console.log(1 - "1"); // 0 - String is coerced to a number and subtracted, resulting in 0.
console.log(0.1 + 0.2); // 0.30000000000000004 - Floating-point precision issue in JavaScript.
console.log(Math.min() > Math.max()); // true - `Math.min()` returns `Infinity`, `Math.max()` returns `-Infinity`, so `Infinity > -Infinity` is true.
console.log({} + []); // "[object Object]"
// explain: Explanation:
// In JavaScript, when you try to add an object ({}) and an array ([]), JavaScript performs type coercion to convert them to primitive types (strings) to execute the addition.
// The empty object {} is converted to its string representation, which is "[object Object]".
// The empty array [] is also converted to an empty string "".
// When you concatenate the two, it effectively becomes "[object Object]" + "", resulting in "[object Object]".
console.log([] + {}); // "[object Object]" - An empty array is coerced to a string when added to an object.
console.log(null > 0); // false
// explain:When using the greater than operator (>), JavaScript attempts to convert both operands to numbers.
// In this case, null is coerced to 0.
// The comparison becomes 0 > 0, which evaluates to false.
console.log(null == 0); // false
// explain: The equality operator (==) checks for loose equality, which means it allows type coercion but does not convert null to a number.
// In JavaScript, null is only loosely equal to undefined.
// Therefore, null is not equal to 0, and the result is false.
console.log(null >= 0); // true - `null`
// explain: The greater than or equal to operator (>=) performs similar type coercion as the greater than operator.
// Here, null is coerced to 0.
// The comparison becomes 0 >= 0, which evaluates to true.
console.log(null === 0); //false
// explain:The strict equality operator checks for equality without type coercion. This means both the value and the type
//  be the same for the comparison to return true.
// In this case, null is of type object, and 0 is of type number.

console.log(NaN == NaN); // false - `NaN` is not equal to anything, including itself.
console.log(typeof NaN); // "number" - `NaN` is of type number in JavaScript.

const obj2 = {
  a: { a: 42 },
};
console.log(obj2.a?.a); //42
//optional chaining operator (?.) to safely access deeply nested properties.
// obj2.a?.a attempts to access the a property of obj2's a property.
// The ?. operator safely checks if obj2.a exists before attempting to access obj2.a.a.
// If obj2.a were undefined or null, obj2.a?.a would return undefined instead of throwing an error.

const obj3 = {};
obj3["1"] = 2;
console.log(obj3); //{ '1': 2 }
//adding a property to an empty object (obj3) with a key of "1" and a value of 2

(function (num) {
  console.log(num * num);
})(false); //0
// immediately invoked function expression (IIFE), meaning it’s executed right away with the argument false.
// The parameter num receives the argument false.
// JavaScript tries to evaluate num * num. Since false is a boolean, it will be coerced to 0 (in JavaScript, false converts to 0 and true to 1
// 0 * 0 results in 0

const key = "age";
const person = { age: 30 };
console.log(person[key]); //30

var i = 1;
let j = 2;
{
  var i = 2;
  let j = 3;
}
console.log(i, j); //2 2
// i is 2 because the var assignment is in the global scope and modifies the original i.
// j is 2 because the block-scoped j defined inside { ... } does not affect the j defined outside.

let a1; //undefined -falsy value
const result1 = a1 || (5 && 0); //false || false
console.log(result1); //0

const a2 = [0, "", 1, "0"];
const b1 = a2.filter((c) => !c);
console.log(b1); //[ 0, '' ]

const arr6 = [1, 2, 3, 4];
const arr7 = arr6.slice(1, 3);
console.log(arr7); //[2,3]
//slice method in JavaScript is used to create a shallow copy of a portion of an array into a new array, without modifying the original array.
// slice(1, 3) starts at index 1 (element 2) and stops before index 3 (element 4).

x1 = 5;
console.log(x1); //5
var x1 = 10;
// console.log(x1); //10
// Hoisting: The var x1 declaration is "hoisted" to the top of the scope
// so it looks internally like:
// var x1;
// x1 = 5;
// console.log(x1);
// x1 = 10;
// The variable x1 is declared (with undefined as its initial value) at the top of the scope. When the line x1 = 5; runs, x1 is assigned 5. Thus, console.log(x1); outputs 5.
// If x1 had been declared with let or const, this would produce a ReferenceError since let and const are block-scoped and not hoisted in the same way as var

let a3 = [];
console.log(a3 ? a3 : 5); //[]
// because in javascript all objects are truthy value, an empty array is also an object

let x1 = [1, 2, 3];
let y1 = x1.reverse();
console.log(x1 === y1); //true;
// x1.reverse() this will reverse x1 inplace, hence y1=x1

let arr8 = [1];
arr8[1] = 2;
arr8.push(3);
console.log(arr8); //[1,2,3]

let arr9 = [1, 2, 3];
let res = arr9.reverse(); //[3,2,1]
console.log(arr9[0]); //3

console.log(1 < 2 < 2); //true
// JavaScript will start from the left and start comparing the first two values which is 1 < 2 where 1 is less than 2, so the output of the expression will be true.
// Now after evaluating the first expression we have the true < 2 as the final expression to evaluate. As we are comparing a boolean and a number value by using the
// concept of Type Conversion, JavaScript will try to convert the boolean value to a number so that the comparison can be made.
// As true translates to 1 i.e. we now have 1 < 2 as the final expression. So the final result evaluates to true.

let a = 10;
let b = 20;
console.log("result is " + a + b); // result is 1020
// concept of Type Conversion. JavaScript will start from the left and the first thing it encounters a string 'result is', next it has a expression to
//  solve where it needs to add a string to the number 10. So it will convert the number 10 to a String and concatinate it with 'result is', so the result
//   will be result is 10 and the exprssion now is 'result is 10' + b

console.log(square(5));
function square(n) {
  return n * n;
} //25
// This is because of a concept in JavaScript called Hoisting which can be divied into two parts:
// 1. Funtion Hoisting: The definition of all the functions are hoisted (lifted to the top of their functional/local scope), therefore they are accessable even if we call a function before we write its definition in the program.
// 2. Variable Hoisting: All varibables defined with var keyword are also hoisted (lifted to the top of their functional/local scope) but with a value of undefined.

console.log(square(5));
var square = function (n) {
  return n * n;
}; //TypeError: square is not a function
// concept of Variable Hoisting will take place and square will have a value of undefined untill the initialisation happens and a function definition is assigned to it. Therefore the console statement will result in a error that Uncaught
//  TypeError: square is not a function as it has the value undefined.

var square = function (n) {
  return n * n;
};
console.log(square(5)); //25

const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log("The index of this number is: " + i);
  }, 3000);
}
// output:
// The index of this number is: 4
// The index of this number is: 4
// The index of this number is: 4
// The index of this number is: 4
// The output will be 4 times The index of this number is: 4 after 3 seconds. This is because the for loop executes 4 times for the following values i: 0, 1, 2, 3 and when value of i is 4 the loop terminates. Now after the loop and exited
//  there are 4 setTimeout calls in the execution stack of JavaScript which will execute after 3 seconds. Therefore after 3 seconds all 4 calls are executed
//  one by one and we see the output 4 times The index of this number is: 4 as the last value of i is 4.
// var is Function-Scoped
// Variables declared with var are shared across the entire function or globally if not in a function.
// In the for loop, i is not tied to each iteration but is a single shared variable updated on every loop iteration.
// 2. Asynchronous Code
// setTimeout schedules a function (callback) to run later, after 3 seconds in this case.
// It doesn't run immediately — it gets added to a queue and runs after the loop finishes.
// 3. Closures
// The function inside setTimeout remembers the variable i by reference, meaning it will use the latest value of i when it runs, not the value of i when the setTimeout was created.

const arr = [10, 12, 15, 21];
for (let i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log("The index of this number is: " + i);
  }, 3000);
}
// output:
// The index of this number is: 0
// The index of this number is: 1
// The index of this number is: 2
// The index of this number is: 3
// let has a blocked scope and it retains its value inside the execution context of the for loop.

var array1 = ["a", "b", "c", "d", "e", "f"];
var array2 = array1;
array2.length = 0;
console.log(array1, array2); //[] []
//array is object when we assign one object to another, we copy reference hence change made in one array will reflect to other array
// array is not a primitve data type it will create a reference and both array1 and array2 will point to the same set of array elements in the memory. When we make length of array2 as 0, we are making the array empty, so both array1 & array2 will be empty arrays.

let output = (function (x) {
  delete x;
  return x;
})(3);
console.log(output); //3
// IIFE - Immediately Invoked Function Expression which will execute with the value of x as 3. Now the delete operator only works with objects and is
// used to delete keys from a object. Therefore the function will return 3 and the value 3 will be assinged to output variable.


