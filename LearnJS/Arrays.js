// Arrays - datatypes

a = []; //empty

b = [1, 2, 3]; //array of numbers

c = ["one", "two", "three"]; //array of strings

d = [1, "two", true]; //array of mixed datatypes

// d = [1, "two", true, { name: "John", age: 30 }]; //array of mixed datatypes including an object

//console.log(d.length);

let details = {
  name: "John",
  age: 30,
};

d = [1, "two", true, { details }];

console.log(d.length);

console.log(d[3].details.age); // Accessing the name property of the object in the array

//====================================

array = [1, 3, 6, 2, 8, 0]; // array1 = array.sort()

console.log(array.sort()); // [ 0, 1, 2, 3, 6, 8 ] //SORT

console.log(array.reverse()); // [ 8, 6, 3, 2, 1, 0 ] //REVERSE

array2 = [5, 9];
console.log(array.concat(array2)); // [ 8, 6, 3, 2, 1, 0, 5, 9 ] //CONCAT

//=====================================

arr = ["chikki", "bannu", "abhi", "nithin"].join(", "); // join

console.log(arr);

// arr1 = ["abc", "abe"];
// console.log(arr1.sort());

string = "India is my country";

str = string.split("");

console.log(str); // [ 'I', 'n', 'd', 'i', 'a' ] // SPLIT

console.log(string.split(" ")); // [ 'India', 'is', 'my', 'country' ] // SPLIT

//====================================

arr1 = ["chikki", "bannu", "abhi", "nithin"]; // INCLUDES -> to identify if an element is present in the array or not

console.log(arr1.includes("abhi")); // true

console.log(arr1.includes("john")); // false

//====================================

numbers = [22, 33, 44, 55, 66]; //PUSH -> adds an element to the array at the end
numbers.push(99);
console.log(numbers); // [ 22, 33, 44, 55, 66, 99 ]

//====================================

num = [12, 13, 14, 15, 16]; // POP Removes last element of an array
num.pop();
console.log(num); // [ 12, 13, 14, 15 ]

//====================================

num1 = [12, 13, 14, 15, 16]; // SHIFT Removes first element of an array
num1.shift();
console.log(num1);

//====================================

num2 = [12, 13, 14, 15, 16]; // UNSHIFT Adds an element to the beginning of an array
num2.unshift(11);
console.log(num2);

//====================================

// POP -> removes last element of an array
// PUSH -> adds element to the array at end
// (PUSH, POP used for last element)

// SHIFT -> removes first element of an array
// UNSHIFT -> adds an element to the beginning of an array
// (SHIFT,UNSHIFT used for first element)

//=========================================================================================================

// ASSIGNMENT

// MAP -> Loops through each element, transformation happens, Returns a new array

// Example 1

integer = [3, 6, 9];

sum = integer.map((num) => num / 3);

console.log(sum);

// Example 2

canditatedetails = [
  { name: "Bannu", age: 26, loc: "hyderabad" },
  { name: "abhi", age: 25, loc: "Vizag" },
  { name: "chikki", age: 25, loc: "Bangalore" },
  { name: "nithin", age: 24, loc: "Chennai" },
];

// detail = canditatedetails.map((candidate) => candidate.loc);
detail = canditatedetails.map((candidate) => candidate.name);

console.log(detail);

//===================================================================================

// FILTER -> Loops through each element, condition is applied, returns a new array

// Example 1

int = [34, 56, 78, 91, 100];

greaterThan70 = int.filter((num) => num > 70);

console.log(greaterThan70);

// Example 2

//checks with indexes and takes first occurrence of the number and removes duplicates

ints = [2, 3, 4, 4, 5, 6, 6];

duplicates = ints.filter((num, index) => ints.indexOf(num) === index);

console.log(duplicates);

//====================================================================================

// REDUCE

// Example 1

numbers1 = [30, 40, 1];

total = numbers1.reduce((add, num) => add + num, 0); // add = 0 at initial stage, then adds with each number

console.log(total);

// Example 2 //MAX NUMBERS

// first it takes max = 121
// then compares max with each number and updates its max value

maxNum = [121, 132, 142, 111];

maximum = maxNum.reduce((max, num) => (num > max ? num : max));

console.log(maximum);

//=====================================================================================

// SLICE

// slice off/cut off portion of array with index mentioned

// Example 1

element = [1, 2, 3, 4, 5];

cutoff = element.slice(2);

console.log(cutoff); // [ 3, 4, 5 ]

// Example 2

elements = [1, 2, 3, 4, 5];

cutoff = elements.slice(1, 4); // it takes the index from 1 to 3 and cuts off the portion of array

console.log(cutoff); // [ 2, 3, 4 ]

//====================================================================================

// SPLICE

// Add, removes, Replaces elements

// Example 1 (ADD ELEMENT)

spliceADD = [10, 20, 30, 40];

result = spliceADD.splice(3, 0, 25); // splice(index value, no.of elements to be removed, element that we add)

console.log(spliceADD); //[ 10, 20, 30, 25, 40 ]

// Example 2 (REMOVE ELEMENT)

spliceREMOVE = [10, 20, 30, 40];

result = spliceREMOVE.splice(2, 1); // splice(index value, no.of elements to be removed)

console.log(spliceREMOVE); //[ 10, 20, 40 ]

// Example 3 (REPLACE ELEMENT)

spliceREPLACE = [10, 20, 30, 40];

result = spliceREPLACE.splice(2, 1, 25); // splice(index value, no.of elements to be removed, element that we add)

console.log(spliceREPLACE); //[ 10, 20, 25, 40 ]

//=======================================================================================

// ForEach

// forEach() is just looping, does'nt built a new array, does not return anything

// Example 1

numberFE = [10, 20, 30]; // loops through each element and prints it

numberFE.forEach((num) => {
  console.log(num);
}); // 10 20 30

// Example 2

numberFE1 = [10, 20, 30]; // loops through each element and adds 5 to it and prints it

numberFE1.forEach((num) => {
  console.log(num + 5); // 15 25 35
});

// In map() the output gives an array because it returns a new array.
// In forEach() it just prints output but not an array because it does not return a new array.
