// OOPS

// 1. Encapsulation
// 2. Inheritance
//Multiple Inheritance is n ot supported
// 3. Polymorphism
// 4. Prototype

//.......................

// 1. Encapsulation
// Encapsulation in JavaScript is the process of binding data and methods together in a class/object
// data + methods inside class = Encapsulation

class employee {
  constructor(EN, EI, EP) {
    this.employeeName = EN;
    this.employeeID = EI;
    this.employeePlace = EP;
  }

  PrintDetails() {
    console.log(this.employeeName, this.employeeID, this.employeePlace);
  }
}
const Object3 = new employee("Nithin", "123", "KNR");
Object3.PrintDetails();

//===============================================================
// example 2

class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log("Hello " + this.name);
  }
}

const p1 = new Person("Nikki");

p1.sayHello(); // Hello Nikki

//===============================================================

// 2. Inheritance

// Inheritance means a child class can use the properties and methods of a parent class.
// It helps reuse code instead of writing it again.

class Apple {
  x = 123;
  y = 234;
  m1() {
    console.log("M1 Method");
  }
  m2() {
    console.log("M2 Method");
  }
  m3() {
    console.log("M3 Method");
  }
  m4() {
    console.log("M4 Method");
  }
}

class Mango extends Apple {
  m5() {
    console.log("M5 Method");
  }
  m6() {
    console.log("M6 Method");
  }
}

const a = new Apple();

const b = new Mango();

b.m3();
console.log(b.x);

//==============================================

// 3. Polymorphism
// Polymorphism means one method can have many forms (different behavior).

// MethodOverriding
// MethodOverloading. // JavaScript does not support true method overloading

class A {
  add(n1, n2) {
    console.log(n1 + n2);
  }
  Print() {
    console.log("Parent");
  }
}

class B extends A {
  add(n1, n2, n3) {
    console.log(n1 + n2 + n3);
  }
  Print() {
    console.log("Child");
  }
}
const objB = new B();
objB.Print(); // MethodOverriding

objB.add(2, 4, 6);

const objA = new A();
objA.add(2, 4, 6); // Method Overloading

//==============================================

// 4. Prototype

class D {
  m1() {
    console.log("M1 Method");
  }
  m2() {
    console.log("M2 Method");
  }
}

D.prototype.x = "Damon";

D.prototype.m3 = function () {
  console.log("M3 Method");
};

const obj9 = new D();
console.log(obj9.x);

obj9.m3();
