// Callback Function

// A function that is passed as an argument to another function and is executed later.

// In simple words, Call this function back later.

// Example 1

function Greet(name) {
  console.log("hey Hi " + name); // this is regular function
}

function PrintGreet(callback) {
  // passing callback as an argument make it call another function inside this.
  let name = "Pranathi";
  callback(name); // calling the name from callback function we want
}

PrintGreet(Greet);

// greet is a normal function.
// processUserInput accepts a callback function.
// Inside it, we call callback(name).
// When we pass greet, it becomes the callback.

// =============================================================

// Example 2

function a() {
  console.log("HI");
}

function b(callback) {
  callback();
}

b(a);

// =============================================================

// Callback with Arrow Function

function calculate(a, b, operation) {
  operation(a, b);
}

calculate(5, 3, function (x, y) {
  console.log(x + y);
});

// =============================================================

// setTimeout

console.log("nikki");
console.log("nithin");
console.log("pranathi");

// OUTPUT is
// nikki
// nithin
// pranathi.

// but here if i want nikki to print last, i will put some TIMEOUT for it to execute later

setTimeout(function () {
  console.log("nikki");
  3000;
});
console.log("nithin");
console.log("pranathi");


// OUTOUT will be
// nithin
// pranathi
// nikki

// =============================================================

// test('login test', async ({ page }) => {
//    await page.goto('https://example.com');
// });

// In here, every test case we write, async ({ page }) => {}, this is a callback function, that is passed out to test

