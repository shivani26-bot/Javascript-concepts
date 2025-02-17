// what is iterator pattern?
// generator functions?
// yield keyword?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators
// iterators and generators bring the concept of iteration directly into the core language and provide a mechanism for customizing the behavior of for...of loops
// [1, 2, 3, 4, 5];
for (const val of [1, 2, 3, 4, 5]) {
  console.log(val); //inside array ther is builtin iterator function that tells how to iterate an array
}

// in order to make custom iterator functions, we have iteration protocols, function* , generator, yield, yield*
function makeIterator(start = 0, end = Infinity, step = 1) {
  let nextStart = start;
  let iterationCount = 0;
  return {
    next() {
      let result;
      if (iterationCount < end) {
        //there are more numbers to iterate
        result = { value: nextStart, done: false };
        nextStart += step;
        iterationCount++;
        return result;
      }
      return { value: iterationCount, done: true };
    },
  };
}
const myIterator = makeIterator(1, 20);
let result = myIterator.next();
while (!result.done) {
  console.log(result.value);
  result = myIterator.next();
}

// for (const val of makeIterator(1, 20)) {
//   console.log(val); //its a custom iterator, javascript will not be able to iterate through it using built in for of loop
// }

// in order to make a iterator which can also use java script built in for of loop
// generator function
// While custom iterators are a useful tool, their creation requires careful programming due to the need to explicitly maintain their internal state. Generator functions provide a powerful alternative: they allow you to define an iterative algorithm by writing a single function whose execution is not continuous. Generator functions are written using the function* syntax.
// When called, generator functions do not initially execute their code. Instead, they return a special type of iterator, called a Generator. When a value is consumed by calling the generator's next method, the Generator function executes until it encounters the yield keyword.
// we can only use a yield keyword inside a generator function

function* count() {
  yield 2;
  yield 4;
  yield 6;
  yield 8;
  yield 10;
  yield 12;
  yield 14;
}
console.log(count()); //generator function

const even = count();
for (const v of even) {
  console.log(v);
}

function* makeMyIteratorNew(start, end, stepsize = 1) {
  for (let i = start; i <= end; i += stepsize) {
    yield i;
  }
}
const one = makeMyIteratorNew(1, 20, 2);
// one.next().done;
// one.next().value;

for (const val of one) {
  console.log(one.next());
  console.log(val);
}
console.log(one.next());

function* generator(i) {
  yield i;
  yield i + 10;
}
const gen = generator(10);
console.log(gen.next().value); //10
console.log(gen.next().value); //20
