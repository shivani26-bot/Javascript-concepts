// synchronous vs asynchronous code
// sync
console.log("start");
console.log("subscribe to my channel");
console.log("end");
// output:
// start
// subscribe to my channel
// end

// async
console.log("start");
setTimeout(() => {
  console.log("subscribe to my channel");
}, 1000);
console.log("end");
// output:
// start
// end
// subscribe to my channel

console.log("start");
function importantAction(username) {
  setTimeout(() => {
    return `Subscribe to ${username}`;
  }, 1000);
}
const message = importantAction("shivani");
console.log(message);
console.log("stop");
// output:
// start
// undefined
// stop

// callbacks
// when we call a function inside another function as argument, it's callback
console.log("start");
function importantAction(username, cb) {
  setTimeout(() => {
    cb(`Subscribe to ${username}`);
  }, 1000);
}

const message = importantAction("shivani", function (message) {
  console.log(message);
});

console.log("stop");
// output:
// start
// stop
// Subscribe to shivani

console.log("start");
function importantAction(username, cb) {
  setTimeout(() => {
    cb(`Subscribe to ${username}`);
  }, 0);
}
function likeTheVideo(video, cb) {
  setTimeout(() => {
    cb(`Like the ${video} video`);
  }, 1000);
}
const message = importantAction("shivani", function (message) {
  console.log(message);
  likeTheVideo("Javascript interview questions", (action) => {
    console.log(action);
  });
});
console.log("stop");
// output:
// start
// stop
// Subscribe to shivani
// Like the Javascript interview questions video

console.log("start");
function importantAction(username, cb) {
  setTimeout(() => {
    cb(`Subscribe to ${username}`);
  }, 1000);
}
function likeTheVideo(video, cb) {
  setTimeout(() => {
    cb(`Like the ${video} video`);
  }, 500);
}
// here these two are independent calls , message and likeTheVideo, depending upon time they will get executed first
const message = importantAction("shivani", function (message) {
  console.log(message);
});
likeTheVideo("Javascript interview questions", (action) => {
  console.log(action);
});
console.log("stop");
// output:
// start
// stop
// Like the Javascript interview questions video
// Subscribe to shivani

console.log("start");
function importantAction(username, cb) {
  setTimeout(() => {
    cb(`Subscribe to ${username}`);
  }, 0);
}
function likeTheVideo(video, cb) {
  setTimeout(() => {
    cb(`Like the ${video} video`);
  }, 1000);
}
function shareTheVideo(video, cb) {
  setTimeout(() => {
    cb(`Share the ${video} video`);
  }, 500);
}
const message = importantAction("shivani", function (message) {
  console.log(message);
  likeTheVideo("Javascript interview questions", (action) => {
    console.log(action);
    shareTheVideo("Javascript interview questions", (action) => {
      console.log(action);
    });
  });
});
console.log("stop");
// output :
// start
// stop
// Subscribe to shivani
// Like the Javascript interview questions video
// Share the Javascript interview questions video

// callbackhell: when there are so many nested callback one inside other ,making the code looke messy
// solution to this is promises
// promise represents upcoming completion or failure of an asyncronous event

console.log("start");
const sub = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = true;
    if (result) resolve("subscribed to roadside coder");
    else reject(new Error("Why aren't you subscribed to roadside coder"));
  }, 2000);
});
// if promise is fulfilled it's handled in then block other wise in catch block for error
sub
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
console.log("stop");
// if result=true then output : start
// stop
// subscribed to roadside coder

console.log("start");
const sub = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = true;
    if (result) resolve("subscribed to roadside coder");
    else reject(new Error("Why aren't you subscribed to roadside coder"));
  }, 2000);
});
console.log(sub);
console.log("stop");
// output: start
// Promise { <pending> }
// stop
// becase promise is not resolved here using .then method

console.log("start");
const sub = Promise.resolve("subscribed to roadside coder");
console.log(sub);
sub.then((res) => console.log(res));
console.log("stop");
// output:
// start
// Promise { 'subscribed to roadside coder' } //fullfilled
// stop
// subscribed to roadside coder //we see the result after all the synchronous code is executed as Promise.resolve is still a asynchronous code

console.log("start");
const sub = Promise.reject("Error in subscribing to roadside coder");
console.log(sub);
sub.then((res) => console.log(res)).catch((err) => console.log(err));
console.log("stop");
// output:
// start
// Promise { <rejected> 'subscribed to roadside coder' }
// stop
// Error in subscribing to roadside coder

// chaning promises
console.log("start");
function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Subscribe to ${username}`);
    }, 1000);
  });
}
function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Like the ${video} video`);
    }, 1000);
  });
}
function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Share the ${video} video`);
    }, 1000);
  });
}
importantAction("shivani")
  .then((res) => {
    console.log(res);
    likeTheVideo("Javascript interview questions").then((res) => {
      console.log(res);
      shareTheVideo("Javascript interview questions").then((res) => {
        console.log(res);
      });
    });
  })
  .catch((err) => console.error(err));
console.log("stop");
// output:
// start
// stop
// Subscribe to shivani
// Like the Javascript interview questions video
// Share the Javascript interview questions video

//chaining promises
console.log("start");
function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Subscribe to ${username}`);
    }, 1000);
  });
}
function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Like the ${video} video`);
    }, 1000);
  });
}
function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Share the ${video} video`);
    }, 1000);
  });
}
importantAction("shivani")
  .then((res) => {
    console.log(res);
    //returns a promise which is handled by then
    return likeTheVideo("Javascript interview questions");
  })
  .then((res) => {
    console.log(res);
    return shareTheVideo("Javascript interview questions");
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.error(err));
console.log("stop");
// output:
// start
// stop
// Subscribe to shivani
// Like the Javascript interview questions video
// Share the Javascript interview questions video

// Promise combinators
// helps to execute more than one promise at one time
// Promise combinators are methods provided by JavaScript to work
// with multiple promises at the same time. They allow developers
// to combine and handle the results of multiple promises in a
// structured way.
// 4 types of promise combinators
// Promise.all()
// Promise.race()
// Promise.allSettled()
// Promise.any()

// Promise.all()
// Waits for all promises to resolve or for any promise to reject.
// If all promises resolve, it returns an array of their resolved values.
// If any promise rejects, it immediately rejects with that reason.
console.log("start");
function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Subscribe to ${username}`);
    }, 1000);
  });
}
function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Like the ${video} video`);
    }, 1000);
  });
}
function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Share the ${video} video`);
    }, 1000);
  });
}
Promise.all([
  importantAction("shivani"),
  likeTheVideo("Javascript interview questions"),
  shareTheVideo("Javascript interview questions"),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
console.log("stop");
// output:
// start
// stop
// [
//   'Subscribe to shivani',
//   'Like the Javascript interview questions video',
//   'Share the Javascript interview questions video'
// ]

console.log("start");
function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Subscribe to ${username}`);
    }, 1000);
  });
}
function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Like the ${video} video`);
    }, 1000);
  });
}
function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Share the ${video} video`);
    }, 1000);
  });
}
Promise.all([
  importantAction("shivani"),
  likeTheVideo("Javascript interview questions"),
  shareTheVideo("Javascript interview questions"),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("Error: Promises failed", err);
  });
console.log("stop");
// output:
// start
// stop
// Error: Promises failed Like the Javascript interview questions video

// Promise.race():
// Resolves or rejects as soon as the first promise settles (either resolved or rejected).
// The result is the value of the first settled promise.
console.log("start");
function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Subscribe to ${username}`);
    }, 1000);
  });
}
function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Like the ${video} video`);
    }, 1000);
  });
}
function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Share the ${video} video`);
    }, 500);
  });
}
Promise.race([
  importantAction("shivani"),
  likeTheVideo("Javascript interview questions"),
  shareTheVideo("Javascript interview questions"),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("Error: Promises failed", err);
  });
console.log("stop");
// output:
// start
// stop
// Share the Javascript interview questions video

console.log("start");
function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Subscribe to ${username}`);
    }, 1000);
  });
}
function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Like the ${video} video`);
    }, 100);
  });
}
function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Share the ${video} video`);
    }, 500);
  });
}
Promise.race([
  importantAction("shivani"),
  likeTheVideo("Javascript interview questions"),
  shareTheVideo("Javascript interview questions"),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("Error: Promises failed", err);
  });
console.log("stop");
// output:
// start
// stop
// Error: Promises failed Like the Javascript interview questions video

// Promise.allSettled()
// Waits for all promises to settle (either resolved or rejected).
// Always returns an array of objects describing the outcome of each promise.
console.log("start");
function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Subscribe to ${username}`);
    }, 1000);
  });
}
function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Like the ${video} video`);
    }, 100);
  });
}
function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Share the ${video} video`);
    }, 500);
  });
}
Promise.allSettled([
  importantAction("shivani"),
  likeTheVideo("Javascript interview questions"),
  shareTheVideo("Javascript interview questions"),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("Error: Promises failed", err);
  });
console.log("stop");
// output:
// start
// stop
// [
//   { status: 'fulfilled', value: 'Subscribe to shivani' },
//   {
//     status: 'rejected',
//     reason: 'Like the Javascript interview questions video'
//   },
//   {
//     status: 'fulfilled',
//     value: 'Share the Javascript interview questions video'
//   }
// ]

// Promise.any()
// Waits for any promise to resolve.
// If no promise resolves, it rejects with an AggregateError (an error containing all rejection reasons).
console.log("start");
function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Subscribe to ${username}`);
    }, 1000);
  });
}
function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Like the ${video} video`);
    }, 100);
  });
}
function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Share the ${video} video`);
    }, 500);
  });
}
Promise.any([
  importantAction("shivani"),
  likeTheVideo("Javascript interview questions"),
  shareTheVideo("Javascript interview questions"),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("Error: Promises failed", err);
  });
console.log("stop");
// output:
// start
// stop
// Share the Javascript interview questions video

console.log("start");
function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Subscribe to ${username}`);
    }, 1000);
  });
}
function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Like the ${video} video`);
    }, 100);
  });
}
function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Share the ${video} video`);
    }, 500);
  });
}
Promise.any([
  importantAction("shivani"),
  likeTheVideo("Javascript interview questions"),
  shareTheVideo("Javascript interview questions"),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("Error: Promises failed", err);
  });
console.log("stop");
// output:
// start
// stop
// Error: Promises failed [AggregateError: All promises were rejected] {
//   [errors]: [
//     'Subscribe to shivani',
//     'Like the Javascript interview questions video',
//     'Share the Javascript interview questions video'
//   ]
// }

// async await
console.log("start");
function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Subscribe to ${username}`);
    }, 1000);
  });
}
function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Like the ${video} video`);
    }, 100);
  });
}
function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Share the ${video} video`);
    }, 500);
  });
}
const result = async () => {
  // wait until the promise returns a fulfilled or rejected state, then value is provided to message1
  //  it will wait for the first await(message1) to finish then only it will move to second await(message2) and then third await(message3)
  const message1 = await importantAction("roadside coder");
  const message2 = await likeTheVideo("Javascript interview questions");
  const message3 = await shareTheVideo("Javascript interview questions");
  console.log({ message1, message2, message3 });
};
result();
console.log("stop");
// output:
// start
// stop
// {
//   message1: 'Subscribe to roadside coder',
//   message2: 'Like the Javascript interview questions video',
//   message3: 'Share the Javascript interview questions video'
// }

// in order to handle errors in async await we use try catch
console.log("start");
function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Subscribe to ${username}`);
    }, 1000);
  });
}
function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Like the ${video} video`);
    }, 100);
  });
}
function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Share the ${video} video`);
    }, 500);
  });
}
const result = async () => {
  try {
    const message1 = await importantAction("roadside coder");
    const message2 = await likeTheVideo("Javascript interview questions");
    const message3 = await shareTheVideo("Javascript interview questions");
    console.log({ message1, message2, message3 });
  } catch (error) {
    console.error("Promises failed:", error);
  }
};
result();
console.log("stop");
// output:
// start
// stop
// Promises failed: Share the Javascript interview questions video

console.log("start");
function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Subscribe to ${username}`);
    }, 1000);
  });
}
function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Like the ${video} video`);
    }, 100);
  });
}
function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Share the ${video} video`);
    }, 500);
  });
}
const result = async () => {
  try {
    const message1 = await importantAction("roadside coder");
    console.log(message1);
    const message2 = await likeTheVideo("Javascript interview questions");
    console.log(message2);
    const message3 = await shareTheVideo("Javascript interview questions");
    console.log(message3);
  } catch (error) {
    console.error("Promises failed:", error);
  }
};
result();
console.log("stop");
// output:
// start
// stop
// Subscribe to roadside coder
// Promises failed: Like the Javascript interview questions video


// promise chaining
// create a promise called first promise which will resolve to a text called first
// and then create another promise second promise which will resolve the first promise we created
// resolve the second promise ,pass the output of second promise to first promise and print the first promise

const firstPromise = new Promise((resolve, reject) => {
  resolve("first!");
});
const secondPromise = new Promise((resolve, reject) => {
  console.log(firstPromise); //Promise {<fulfilled>: 'first!'
  resolve(firstPromise);
});
secondPromise
  .then((res) => {
    console.log(res); //first!
    return res;
  })
  .then((res) => console.log(res)); //first!

// rewrite the example code using async/await instead of .then/catach
function loadJson(url) {
  return fetch(url).then((response) => {
    if (response.status == 200) {
      return response.json();
    } else throw new Error(response.status);
  });
}

loadJson("https://fakeurl.com/no-such-user.json").catch((err) =>
  console.log(err)
);

async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    let json = await response.json();
    return json;
  }
  throw new Error(response.status);
}

loadJson("https://fakeurl.com/no-such-user.json").catch((err) =>
  console.log(err)
);

// solve promise recursively
function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Subscribe to ${username}`);
    }, 1000);
  });
}
function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Like the ${video} video`);
    }, 100);
  });
}
function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Share the ${video} video`);
    }, 500);
  });
}
function promRecurse(funcPromises) {
  if (funcPromises.length === 0) return;
  const currPromise = funcPromises.shift();
  currPromise
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
  promRecurse(funcPromises);
}

promRecurse([
  importantAction("shivani"),
  likeTheVideo("funny"),
  shareTheVideo("amazing"),
]);
//output:
// Like the funny video
// Share the amazing video
// Subscribe to shivani

const p1 = new Promise((resolve) => {
  setTimeout(() => { //scheduled in taskqueue
    resolve("Done!");
    console.log("yay!"); //sync
  }, 500);
}).then((result) => console.log(result));  //scheduled in microtaskqueue
// output:
// yay!
// done!

// First, the Promise constructor is added to the call stack, which creates the Promise object. The executor function is called, and on the first line,
//  we encounter a setTimeout. The setTimeout function is added to the call stack and is responsible for scheduling the timer, in this case for 
//  100 milliseconds, with the callback that we passed to it (the function that eventually calls resolve).
// Next, the .then handler is encountered. The .then method is added to the call stack, which creates a promise reaction record containing the 
// callback we provided as its handler. After this, the .then method is popped off the call stack.
// When the 100 milliseconds are up, the callback passed to setTimeout is added to the task queue. With nothing left on the call stack 
// (the script has finished execution), the callback moves from the task queue to the call stack. This callback calls resolve, which changes the promise state to fulfilled, sets the promise result to the string "Done!", and schedules the .then handler in the microtask queue.
// The resolve function and its associated callback are then popped off the call stack. With the call stack empty again, the event loop checks 
// the microtask queue. Since the .then handler is waiting there, it is added to the call stack. The handler executes and logs the promise result 
// ("Done!") to the console.
// Finally, the handler is popped off the call stack, completing the execution.

new Promise((resolve, reject) => {
  resolve(1);
})
  .then((result) => result * 2)  5:04
  .then((result) => result * 2)
  .then((result) => console.log(result));
//4
// First, the new Promise constructor is called, creating the promise object. This promise immediately resolves with the value 1. The promise's 
// state is set to fulfilled, and its result is set to 1.
// Next, the .then handler is invoked. This creates a promise reaction record, with the handler being the function result * 2. The .then method
//  also returns a new promise object. Since the initial promise result is 1, the handler computes result * 2 (i.e., 1 * 2), resulting in 2. This new 
//  promise is immediately resolved with the value 2, and its state is set to fulfilled.
// On the next .then call, the process repeats. Another promise reaction record is created, again with the handler result * 2. The previous promise 
// result, which is 2, is passed to this handler. The handler computes 2 * 2, resulting in 4. A new promise is created, its state is set to fulfilled,
//  and its result is now 4.
// Finally, the last .then is called. This handler simply logs the result. Since no value is returned from this handler, the final promise is resolved
//  with undefined. The state of this last promise is set to fulfilled, and the process completes with the value 4 logged to the console.

new Promise((resolve)=>{
  console.log(1)
  resolve(2)
}).then(result=>console.log(result))
console.log(3)
// output:
// 1
// 3
// 2 
// First, we have the new Promise constructor added to the call stack. A new promise object is created. Then we have the executor function, 
// which gets added to the call stack. On the very first line, we have console.log(1), which gets added to the call stack and logs 1.
// Next, we call resolve(2), which changes the promise state to fulfilled and sets the promise result to 2. At this point, there isn’t a promise 
// fulfill reaction yet, as that only happens on the next line. resolve is popped off the call stack, followed by the executor function and the
//  new Promise constructor.
// On the next line, we encounter .then. This creates a promise reaction record, but it doesn’t get added to a list since the promise is already 
// resolved. This would avoid unnecessary memory usage. However, it still has access to the promise result, so the promise reaction record has the
//  handler with the result being 2. The handler includes a console.log(result), and it is immediately scheduled to the microtask queue. It’s 
//  important to note that it’s not immediately executed but only scheduled.
// Next, the script continues, as the call stack isn’t empty yet. On the following line, we encounter console.log(3), which is added to the call
//  stack and logs 3. At this point, we have 1 and 3 logged.
// Now that the script is done and the call stack is empty, the first task in the microtask queue is added to the call stack. This task is the 
// .then handler, which logs the result (2). Finally, 2 is logged.


// promise polyfill implementation

// function PromisePolyFill(executor){
// let onResolve,onReject
// function resolve(value){
//   // onResolve is a callback 
//   onResolve(value);
// }
// function reject(value){
//   onReject(value);
// }

// // .then excepts a callback
// // this refers to PromisePolyFill 
// this.then= function(callback){
//   onResolve=callback;
//   return this;
// }
// this.catch=function(callback){
//   onReject=callback;
//   return this;
// }
//   // executor function excepts two parameters 
//   executor(resolve,reject)
// }
// const examplePromise= new PromisePolyFill((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve(2)
//   },1000)
// })
// examplePromise.then((res)=>{
//   console.log(res) //2
// }).catch((err)=> console.error(err))


// to handle the synchronous code as well 
function PromisePolyFill(executor){
  let onResolve,onReject,isFulfilled=false, isRejected=false, isCalled=false, value;
  function resolve(val){
  isFulfilled=true
  value=val
  if(typeof onResolve=="function"){
     // onResolve is a callback 
    onResolve(val);
    isCalled=true;
  }
  }
  function reject(val){
    isRejected=true;
    value=val;
    if(typeof onReject==="function"){
      onReject(val);
      isCalled=true;
    }
  
  }
  
  // .then excepts a callback
  // this refers to PromisePolyFill 
  // for asynchronous operation this.then will be called first 
  this.then= function(callback){
    // callback will be assigned to onResolve 
    onResolve=callback;
    // it's not gonna call this for asynchronous operation at first as both the values does'nt satisfy the condition
    if(isFulfilled & !isCalled){
      isCalled=true;
      onResolve(value)
    }
    return this;
  }
  this.catch=function(callback){
    onReject=callback;
    if(isRejected && !isCalled){
      isCalled=true;
      onReject(value)
    }
    return this;
  }
  try{
    // executor function excepts two parameters
    // call the executor  
    executor(resolve,reject)
  }
  catch(error){
    reject(error)
  }
  }
  const examplePromise= new PromisePolyFill((resolve,reject)=>{
    // for asynchronous operation .then will be called first
    // as this.then is executed and this is returned it will come to the executor 
    setTimeout(()=>{
      resolve(2)
    },1000)

    // for synchronous operation it will call the function resolve first 
  //  next we will call the .then method 
    // resolve(2)
  })
  examplePromise.then((res)=>{
    console.log(res) //2
  }).catch((err)=> console.error(err))

  PromisePolyFill.resolve=(val)=>{
    return new PromisePolyFill(function executor(resolve,reject){
      resolve(val)
    })
  }
  PromisePolyFill.reject=(val)=>{
    return new PromisePolyFill(function executor(resolve,reject){
      reject(val)
    })
  }

  // promise.all() polyfll 
  function importantAction(username) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Subscribe to ${username}`);
      }, 1000);
    });
  }
  function likeTheVideo(video) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Like the ${video} video`);
      }, 1000);
    });
  }
  function shareTheVideo(video) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Share the ${video} video`);
      }, 1000);
    });
  }

  Promise.allPolyfill=(promises)=>{
    return new Promise((resolve,reject)=>{
      //output is in form of array
      const results=[];
      if(!promises.length){
        resolve(results);
      }
      let pending=promises.length;
      promises.forEach((promise,idx)=>{
        Promise.resolve(promise).then((res)=>{
          results[idx]=res;
          pending--;
          if(pending===0) resolve(results);
          //for any error simply reject
        },reject)
      })
    })
  }
  Promise.allPolyfill([
    importantAction("shivani"),
    likeTheVideo("Javascript interview questions"),
    shareTheVideo("Javascript interview questions"),
  ])
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log("Failed:",err);
    });
    //output
    // [
    //   'Subscribe to shivani',
    //   'Like the Javascript interview questions video',
    //   'Share the Javascript interview questions video'
    // ]
    


   



    // output based questions
    // asynchronous operations run after synchronous operations
console.log("start"); //sync
const promise1 = new Promise((resolve, reject) => {
  console.log(1); //sync
  resolve(2); //async
});
promise1.then((res) => {
  //async
  console.log(res);
});
console.log("end"); //sync
// output:
// start
// 1
// end
// 2

console.log("start"); //sync
const promise1 = new Promise((resolve, reject) => {
  console.log(1); //sync
  resolve(2); //async
  console.log(3); //sync
});
promise1.then((res) => {
  //async
  console.log(res);
});
console.log("end"); //sync
// output
// start
// 1
// 3
// encode
// 2

console.log("start"); //sync
const promise1 = new Promise((resolve, reject) => {
  console.log(1); //sync
  console.log(3); //sync
});
// as there is no resolve it will not go into .then block
promise1.then((res) => {
  //async
  console.log(res);
});
console.log("end");
// output
// start
// 1
// 3
// end

console.log("start"); //sync
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1); //sync
    resolve("success");
  });

console.log("middle"); //sync
fn().then((res) => {
  console.log(res); //async
});
console.log("end"); //sync
// output:
// start
// middle
// 1
// end
// success

function job() {
  return new Promise(function (resolve, reject) {
    reject();
  });
}

let promise = job();

promise
  .then(function () {
    console.log("Success 1");
  })
  .then(function () {
    console.log("success 2");
  })
  .then(function () {
    console.log("success 3");
  })
  .catch(function () {
    console.log("error 1");
  })
  .then(function () {
    console.log("success 4");
  });
//output:
// error 1
// success 4

function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}
let promise = job(true);
promise
  .then(function (data) {
    console.log(data);
    //calling another promise here
    return job(false);
  })
  .catch(function (error) {
    console.log(error);
    //it's not a failed promise, will be counted as resolved promise as its returning string
    return "Error caught";
  })
  .then(function (data) {
    console.log(data);
    //again calling a promise but after this we don't have .then to handle the resolved value, hence the process will end here
    return job(true);
  })
  .catch(function (error) {
    console.log(error);
  });
// output:
// success
// error
// error caught

function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}
let promise = job(true); //resolve("success")
promise
  .then(function (data) {
    console.log(data); //success
    return job(true);
  })
  .then(function (data) {
    if (data !== "victory") {
      //throwing an error, rejected promise,next go to catch block
      throw "Defeat";
    }
    // we will ignore this
    return job(true);
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error); //defeat
    //returns a rejected promise go to catch block
    return job(false); //reject("error")
  })
  .then(function (data) {
    console.log(data);
    return job(true);
  })
  .catch(function (error) {
    console.log(error); //error
    //resolved promise as it returns string, go to .then
    return "error caught";
  })
  .then(function (data) {
    console.log(data); //error caught
    //not a rejected promise, go to then block, normal text
    return new Error("test");
  })
  .then(function (data) {
    console.log("success:", data.message); //success:test
  })
  .catch(function (data) {
    console.log("Error", data.message);
  });
// output:
// success
// Defeat
// error
// error caught
// success: test


    // new Promise constructor is called, and the executor function (resolve, reject) executes.
    var p = new Promise((resolve, reject) => {
      // reject function is called with the value Error('The Fails!'), which causes the promise
      //  p to move to the rejected state. The rejection reason is the Error object with the message "The Fails!"
      reject(Error('The Fails!'))
    })

// .catch method is called on the promise p.
// When .catch is registered, it creates a promise reaction record with the provided handler (error => console.log(error.message)).
// Since the promise p is already rejected, the handler is immediately scheduled to the microtask queue
p.catch(error => console.log(error.message))
    // second .catch method is also called on the same promise p.
    // Like the first .catch, it creates another promise reaction record with the same handler.
    // Since the promise p is already rejected, this handler is also scheduled to the microtask queue.
p.catch(error => console.log(error.message))
// event loop processes the microtasks in the order they were scheduled.
// The first .catch handler runs, logging "The Fails!" to the console.
// The second .catch handler runs next, logging "The Fails!" again.
// output:
// The Fails!
// The Fails!

var p = new Promise((resolve, reject) => {
  // Promise.reject(Error('The Fails!')) is returned. However, this doesn't directly reject the outer promise p. Instead, it creates a new 
  // rejected promise, but the outer promise p does not automatically propagate its rejection.
  // Returning Promise.reject inside the executor function does not reject the outer promise p. Instead, it creates a new, unrelated rejected promise.
  return Promise.reject(Error('The Fails!'))
})
// rejection from Promise.reject('The Fails!') does not propagate to p, the outer promise p remains in a pending state.
// The .catch handlers attached to p do not execute because p was never explicitly rejected or resolved.
p.catch(error => console.log(error.message))
p.catch(error => console.log(error.message))

// we can fix the above code like this 
var p = Promise.reject(Error('The Fails!')); // Directly reject with an Error object
p.catch(error => console.log(error.message));
p.catch(error => console.log(error.message));
// output:
// The Fails!
// The Fails!

var p = new Promise((resolve, reject) => {
  reject(Error('The Fails!'))
})
.catch(error => console.log(error)) 
.then(error => console.log(error))
// .catch handler does not rethrow the error. Instead, it implicitly returns undefined (the return value of console.log(error)).
// The .then handler is executed next. It receives the value returned by the previous .catch (i.e., undefined) and logs it to the console.
// output:
// Error: The Fails!
// undefined


var p = new Promise((resolve, reject) => {
  reject(Error('The Fails!'))
})
.catch(error => console.log(error.message))
.catch(error => console.log(error.message))
// output:
// The Fails!
// Promise object p is created. Inside the executor function, reject(Error('The Fails!')) is called, which rejects the promise with an Error object having the message "The Fails!".
// The first .catch is executed because the promise is rejected:
// It logs error.message, which is "The Fails!".
// The .catch does not rethrow the error. Instead, it implicitly resolves the promise with undefined (the return value of console.log()).
// The second .catch is executed next:
// It does not receive an error because the previous .catch resolved the promise. The promise now has a resolved value of undefined.
// Since there is no error to handle, the second .catch does nothing.



// When a .catch handler is executed, it handles the error and resolves the promise unless the error is explicitly rethrown. If no error is rethrown, the promise transitions to a resolved state, and subsequent .then or .catch handlers act on the resolved value, not on the original error.
// .catch Resolves the Promise
var p = new Promise((resolve, reject) => {
  reject(Error('An error occurred!'));
})
.catch(error => {
  console.log("Caught error:", error.message); // Handles the error
})
.then((error) => {
  console.log(error); //undefined
});
// The promise is rejected with Error('An error occurred!').
// The .catch handler catches the error and logs Caught error: An error occurred!.
// The .catch does not rethrow the error. Instead, it implicitly returns undefined, resolving the promise.
// The .then handler executes because the promise has been resolved, logging Promise resolved after .catch.

// .catch Rethrows the Error
var p = new Promise((resolve, reject) => {
  reject(Error('An error occurred!'));
})
.catch(error => {
  console.log("Caught error:", error.message); // Handles the error
  throw error; // Explicitly rethrow the error
})
.then(() => {
  console.log("This will not execute because the error was rethrown.");
})
.catch(error => {
  console.log("Error rehandled:", error.message); // Catches the rethrown error
});
// output:
// Caught error: An error occurred!
// Error rehandled: An error occurred!
// The promise is rejected with Error('An error occurred!').
// The first .catch handler catches the error and logs Caught error: An error occurred!.
// The .catch explicitly rethrows the error with throw error.
// The .then handler is skipped because the promise is now rejected again.
// The second .catch handler catches the rethrown error and logs Error rehandled: An error occurred!.


new Promise((resolve, reject) => {
  // This promise is immediately resolved with the string 'Success!'.
  resolve('Success!')
})
.then(() => {
  // .then() handler is executed after the promise is resolved. Inside this handler, an error is thrown using throw Error('Oh noes!'). 
  // This causes the promise to transition into a rejected state with the error Error('Oh noes!').
  throw Error('Oh noes!')
})
.catch(error => {
  // The error thrown in the .then handler is caught by the first .catch().
  return "actually, that worked"
})
.catch(error => console.log(error.message))
// second .catch() handler is executed, but there is no error to catch because the previous .catch() resolved the promise with 'actually, that worked'.
// As a result, the second .catch() does not handle any error and simply does nothing.
//prints nothing


Promise.resolve('Success!')
  .then(data => {
    return data.toUpperCase()
  })
  .then(data => {
    console.log(data)
  })
  // output:
  // SUCCESS!

  // Creates a resolved promise with the value 'Success!'.
  Promise.resolve('Success!')
  .then(data => {
    // The resolved value 'Success!' is passed to the first .then handler.
    // The promise resolves with the value 'SUCCESS!'.
    return data.toUpperCase()
  })
  .then(data => {

    // resolved value 'SUCCESS!' is passed to the second .then handler.
    console.log(data)
    // The value 'SUCCESS!' is returned, so the promise resolves with 'SUCCESS!'.
    return data
  })
  .then(console.log)
  // resolved value 'SUCCESS!' is passed to the third .then handler.
// Here, console.log is directly passed as the handler, so it logs 'SUCCESS!'.
// OUTPUT:
// SUCCESS!
// SUCCESS!


Promise.resolve('Success!')
  .then(data => {
    // handler does not return a value, it implicitly returns undefined.
    data.toUpperCase() //Converts data to uppercase, but the result is not returned
  })
  .then(data => {

    console.log(data) //Logs the resolved value of the previous `.then`
  })
  // output:
  // undefined

  Promise.resolve('Success!')
  .then(() => {
    throw Error('Oh noes!')
  })
  .catch(error => {
    return 'actually, that worked'
  })
  .then(data => {
    throw Error('The fails!')
  })
  .catch(error => console.log(error.message))
  // output:
  // The fails!



  // https://www.youtube.com/watch?v=Xs1EMmBLpn4
   // https://roadsidecoder.hashnode.dev/javascript-interview-questions-promises-and-its-polyfills