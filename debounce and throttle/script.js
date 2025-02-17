// Ques1 create a button ui and and add debounce as following
// show "button pressed <x> times" every time button is pressed
// increase "triggered <y> times" count after 800ms of debounce

const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

// We want the button to  increment trigger count only after 800 milliseconds or more have passed since we stopped pressing it. It should not be incremented every time we press the button.
var pressedCount = 0;
var triggerCount = 0;
// use debouncing
// use library lodash or custom implementation
// using lodash
// const debouncedCount = _.debounce(() => {
//   count.innerHTML = ++triggerCount;
// }, 800);
// btn.addEventListener("click", () => {
//   btnPress.innerHTML = ++pressedCount;
//   //   count.innerHTML = ++triggerCount;
//   debouncedCount();
// });

// https://cdnjs.com/libraries/lodash.js
// also refer this
// https://lodash.com/docs/4.17.15#debounce

// Ques2 create a button ui and and add throttle as following
// show "button pressed <x> times" every time button is pressed
// increase "triggered <y> times" count every 800ms of throttle
// In throttling, it limits the execution of an event handler function when the event is triggered continuously due to user actions.
// https://lodash.com/docs/4.17.15#throttle
// using lodash
// trigger count will be incremented every 800ms

// const throttledCount = _.throttle(() => {
//   count.innerHTML = ++triggerCount;
// }, 800);
// btn.addEventListener("click", () => {
//   btnPress.innerHTML = ++pressedCount;
//   throttledCount();
// });

// const start = new Date().getTime();
// const throttledCount = _.throttle(() => {
//   const now = new Date().getTime();
//   console.log(now - start);
//   count.innerHTML = ++triggerCount;
// }, 800);
// btn.addEventListener("click", () => {
//   btnPress.innerHTML = ++pressedCount;
//   throttledCount();
// });

// Q3. debounce as custom implementation using polyfill
// polyfill
// First Click:
// debouncedCount is called → timer is undefined → setTimeout is created → Waits for 800ms.
// Second Click (Within 800ms):
// debouncedCount is called again → clearTimeout(timer) clears the existing timer → A new setTimeout is created.
// Pause for >800ms:
// The latest setTimeout executes → triggerCount is incremented → callback runs.
// Next Click After 800ms:
// The process repeats with a fresh timer.
// clearTimeout(timer) Doesn't Reset the Counter:
// The purpose of clearTimeout(timer) is to cancel a specific timeout using its ID.
// Even though you're canceling the previous timeout, the setTimeout function will still create a new timer with a higher ID.

// const myDebounce = (callback, delay) => {
//   let timer;
//   return function (...args) {
//     // It's because we are not clearing the timeout when the gap between two button presses is less than 800 milliseconds.
//     //  If the interval between presses is shorter than 800 milliseconds, the timeout should be cleared and reset, so the callback
//     //  function is not triggered until after a full 800 milliseconds of inactivity.
//     //  This ensures the callback function is only executed if the button is not pressed for at least 800 milliseconds.
//     console.log(timer);
//     if (timer) clearTimeout(timer);
//     console.log(timer);
//     // timer increasing values like 2, 3, 4, 5 is completely normal and expected. These numbers represent the IDs assigned to the setTimeout by the browser. Each time you call setTimeout, the browser increments the timeout ID it returns.
//     // timer value is populated immediately when you call setTimeout. The setTimeout function returns a unique timer ID (a numeric identifier) as soon as it's called, which is used by the browser or runtime (like Node.js) to manage the scheduled execution of the callback.
//     timer = setTimeout(() => {
//       console.log("callback", callback);
//       callback(...args);
//     }, delay);
//   };
// };
// const debouncedCount = myDebounce(() => {
//   count.innerHTML = ++triggerCount;
// }, 800);
// btn.addEventListener("click", () => {
//   btnPress.innerHTML = ++pressedCount;
//   debouncedCount();
// });

// myDebounce function that takes two parameters:
// callback: The function to be executed after the delay.
// delay: The amount of time (in milliseconds) to wait before executing the callback.

// myDebounce function returns a new function that can accept any number of arguments (...args).
// This returned function is what will be used to wrap the actual event handler or callback function.

// If there is an existing timeout (i.e., timer is not undefined), it is cleared using clearTimeout(timer).
//  This prevents the previous scheduled callback from executing if a new event occurs within the delay period.

// A new timeout is set using setTimeout. This schedules the callback function to be executed after the specified delay.
// The callback function is called with the arguments passed to the debounced function (...args)

// Q3. throttle as custom implementation using polyfill
// polyfill
const myThrottle = (callback, delay) => {
  let last = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - last < delay) return;
    last = now;
    return callback(...args);
  };
};
const throttledCount = myThrottle(() => {
  count.innerHTML = ++triggerCount;
}, 1000);
btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;
  throttledCount();
});

// We will measure if the difference between the current time and the previous time is greater than the delay time. If the difference is less than the delay time, we simply return without executing the event. However, if the difference is greater than the delay time, we will proceed to execute the event.
