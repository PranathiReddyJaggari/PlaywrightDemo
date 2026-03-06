// PROMISES

// A Promise represents a value that will be available now, later, or never.

// Pending	-> Operation still running
// Resolved (Fulfilled)	-> Operation completed successfully
// Rejected	-> Operation failed

// Promise requires a function. That function is called the executor function.

a = Promise.resolve("chikki");
a.then((name) => console.log(name)); // resolve - then

b = Promise.reject("chikki");
b.catch((name) => console.log(name)); // reject - catch

c = Promise.resolve({ firstname: "damon", lastname: "salvatore" });
c.then((name) => console.log(name.firstname));

// Promise → a built-in JavaScript class

// new → creates an object from that class

let promise = new Promise(function (resolve, reject) {
  let success = false;

  if (success) {
    resolve("Task completed");
  } else {
    reject("Task failed");
  }
});

promise
  .then((result) => console.log(result))
  .catch((result) => console.log(result));

//===============================================
// async await

async function addition(a, b) {
  return a + b;
}

console.log(addition(2, 3));

// async -> then output is "Promise { 5 }"

async function add(a, b) {
  return a + b;
}

add(2, 3).then((num) => console.log(num)); // this will make promise go away

//====================================================

function add(a, b) {
  return Promise.resolve(a + b);
}

function sub(a, b) {
  return Promise.resolve(a - b);
}

async function run() {
  let x = await add(22, 44);
  let y = await sub(40, 20);

  console.log(x);
  console.log(y);
}

run();
