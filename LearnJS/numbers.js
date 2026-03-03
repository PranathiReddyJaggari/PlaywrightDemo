number = 33;

number2 = 33.66; // float in other languages // number in JS

// 2^53    //BigInt

n1 = 6767676767676767666788898989898;
n2 = 3;

console.log(n1 + n2); // 6767676767676767666788898989898

// actual output is 6.767676767676768e+30

// to get proper output we use "n" at the end of the number

n1 = 6767676767676767666788898989898n;
n2 = 3n;

console.log(n1 + n2); // 6767676767676767666788898989901n

// we can also use BigInt() function to convert a number to BigInt

n3 = BigInt(8767676767676767666788898989898);
n4 = BigInt(3);

console.log(n3 + n4); // 6767676767676767666788898989901n

str = Number("10");

console.log(typeof str);

console.log(parseInt("25.66")); // 25 // it will convert the string to number and ignore the decimal part

console.log(parseFloat("25.66")); // 25.66 // it will convert the string to number and keep the decimal part

// MATH function

x = Math.trunc(34.8); // it will return the integer part of the number

console.log(x);

y = Math.round(39.5); // 39.0 - 39.4 => 39, // 39.5 - 39.9 => 40 ( basically rounds to nearest value)

console.log(y);

z = Math.floor(22.4);

console.log(z);

console.log(Math.random()); // it will return a random number between 0 and 1

b = Math.pow(5, 3); // 5 x 5 x 5 = 125 // it is basically 5^3

console.log(b);

// Marh.max() and Math.min() functions

console.log(Math.max(23, 43, 56, 14, 94)); // 94

console.log(Math.min(23, 43, 56, 14, 94)); // 14

// using external array

arr = [23, 43, 56, 14, 94];

console.log(Math.max(...arr)); // ...arr => it gives all elements inside Math.max() function



