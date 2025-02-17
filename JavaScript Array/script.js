// Create an array and print its element
const arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(...arr);
// find the length of the array
console.log(arr.length);

// access the first element of array
console.log(arr[0]);

// access the last element of array
console.log(arr[arr.length - 1]);

// add element at end of array
arr.push(6);
console.log(arr);

// remove the last element from an array
arr.pop();
console.log(arr);

// add an element at beginning of array
arr.unshift(0);
console.log(arr);

// remove the first element from the array
arr.shift();
console.log(arr);

// concatenate two arrays
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8, 9];
const combined1 = arr1.concat(arr2);
const combined = arr2.concat(arr1);
console.log(combined1);
console.log(combined);

// check if array contains specific element
console.log(arr.includes(3)); //returns true
console.log(arr.includes(8)); //returns false

// intermediate questions
// reverse an array
arr.reverse();
console.log(arr);

// sort an array in ascending order
const arr3 = [7, 3, 2, 8];
const arr4 = [9, 2, 4, 1];
const arr5 = [10, 15, 1, 0];
arr3.sort(function (a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});
console.log(arr3);

arr4.sort((a, b) => a - b); //using comparator function to sort
console.log(arr4);
arr5.sort();
console.log(arr5);

// sort an array in descending order
arr5.sort((a, b) => b - a);
console.log(arr5);

// find index of specific element
console.log(arr.indexOf(3)); //2
console.log(arr.indexOf(8)); //-1

// remove the specific element by its index
const arr6 = [2, 3, 4, 5];
arr6.splice(arr6.indexOf(3), 1);
console.log(arr6);

// create a new array with only even numbers
const arr7 = [1, 4, 6, 7, 9, 2, 8, 5, 3, 0];
const evens = arr7.filter((num) => num % 2 === 0);
console.log(evens);

// sum all elements of an array
// initialValue	      previousValue	   currentValue
// passed	          initialValue	    array[0]
// not passed	      array[0]	        array[1]
// function callbackFn(previousValue, currentValue, currentIndex, array) { /**/}
const sum = arr7.reduce((total, num) => total + num, 0);
console.log(sum);

// Math.max Math.min function in JavaScript expects a list of arguments, not an array
// The spread operator ...arr7 spreads the elements of arr7 into individual arguments, so it's equivalent to calling:
// Math.max(3, 1, 4, 1, 5, 9);
// Math.max(arr7);
// Math.max receives the array as a single argument and tries to compare it with other numbers, which doesn't make sense and returns NaN.
// find maximum element in an array
const max = Math.max(...arr7);
console.log(max);

// find minimum element in an array
const min = Math.min(...arr7);
console.log(min);

// flatten a nested array
// creates a new array with all the elements of the subarrays concatenated to it recursively up to a specified depth.
// let newArray = arrayObject.flat([depth])
// depth parameter specifies how deep the method flats the array structure
// you can pass the Infinity into the flat() method to recursively concatenate all elements of the sub-arrays into the new array
// If an array has empty slots, you can use the flat() method to remove the holes
// const numbers = [1, 2, , 4, , 5];
// const sequence = numbers.flat();
// console.log(sequence);

const arr8 = [1, [2, 3], [4, [5, 6]]];
// const flatten = arr8.flat();// depth is 1 by default.
const flatten = arr8.flat(2);
console.log(flatten);

// remove duplicate elements from array
// Set that stores a collection of unique values of any type.
// To create a new empty Set
// let setObject = new Set();
// Set constructor also accepts an optional iterable object. If you pass an iterable object to the Set constructor, all the elements of the iterable object will be added to the new set
const duplicate = [4, 3, 6, 3, 6, 4];
const unique = [...new Set(duplicate)];
console.log(unique);

// merge two arrays and remove duplicates
const arr9 = [1, 2, 3];
const arr10 = [4, 3, 5, 6];
const merged = [...new Set([...arr9, ...arr10])];
console.log(merged);

// create array of squares of each number
const squares = arr.map((num) => num ** 2);
console.log(squares);

// find all the elements greater than specific value
const greater = arr10.filter((num) => num > 4);
console.log(greater);

// check if all the elements are positive
// to test whether every element of an array satisfies a specified condition.
const allPositive = arr.every((num) => num > 0);
console.log(allPositive); //returns true or false

// rotate an array by k positions
function rotate(arr11, K) {
  K = K % arr11.length;
  return [...arr11.slice(K), ...arr11.slice(0, K)];
}

const arr11 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(rotate(arr11, 2));

// second largest element in an array
const maxm = Math.max(...arr11);
const filtered = arr11.filter((num) => num !== maxm);
const secondMax = Math.max(...filtered);
console.log(secondMax);

// find intersection of two arrays
function intersection(arr12, arr13) {
  return arr12.filter((value) => arr13.includes(value));
}

const arr12 = [1, 2, 3, 4, 5];
const arr13 = [4, 5, 6, 7, 8];
console.log(intersection(arr12, arr13));

// find union of two arrays
function union(arr12, arr13) {
  return [...new Set([...arr12, ...arr13])];
}

console.log(union(arr12, arr13));
