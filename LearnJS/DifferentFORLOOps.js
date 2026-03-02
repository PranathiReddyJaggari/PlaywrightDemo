// FOR LOOP

const fruits = ["apple", "banana", "cherry"];

for (let i = 2; i >= 0; i--) {
  console.log(i, fruits[i]);
}

// FOR EACH

const fruits1 = ["apple", "banana", "cherry"];

fruits1.forEach(function (fruit, index, array) {
  console.log(fruit, index, array);
});

// fruits.forEach((fruit, index, array) => {
//   console.log(fruits, index, array);
// });

// FOR OF

// for...in gives you:    Keys (property names).    NOT values.

// for...in → IN = Index (key)

// for...of → OF = Value of array

const fruits2 = ["apple", "banana", "cherry"];

for (let fruit of fruits2) {
  console.log(fruit, fruits2.indexOf(fruit)); // only takes value of array and not index value
}

// FOR IN

const fruits3 = ["apple", "banana", "cherry"];

for (let index in fruits3) {
  console.log(index, fruits3[index]); // omly takes index value and not the value of array
}

//==============================================================================

// ForEach => it is just looping, does'nt built a new array, does not return anything

// FOR IN => it gives you keys (property names) and not values

// FOR OF => it gives you values of array and not index value
