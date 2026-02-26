// functionname = () => console.log(" ");  //SYNTAX for  an arrow function

function printmessage() {
  console.log("NIkki");
}
printmessage();

//----------

printmessage = () => console.log("Nikki");
printmessage();

//----------

printmessage = (name) => console.log("Hi " + name);
printmessage("Nithin");

// multiple parameters.

Add = (n1, n2) => {
  console.log(n1);
  console.log(n2);
  return n1 + n2;
};
console.log(Add(3, 5));

// anonymous function

// () => console.log(" ");   // anonymous function  = no function name

(name) => console.log("Hi " + name); // cannot call an anonymous function (as it doesnt have a function name to call)
