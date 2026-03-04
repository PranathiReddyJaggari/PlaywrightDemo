// // class className {
// //   m1() {}
// //   m2() {}
// //   m3() {}
// // }
// // const randomname = new className();

// chikki.Print();

// class calculate {

//   constructor() {
//     console.log("Nithin");
//   }

//   add(n1, n2) {
//     console.log(n1 + n2);
//   }

//   subtract(n1, n2) {
//     console.log(n1 - n2);
//   }
// }

// const obj = new calculate();
// const obj1= new calculate(Number,Number);
// const obj2 = new calculate(Number,String);
// const obj3 = new calculate(String, String);
// obj.add(24);
// obj1.add(20,30);
// obj2.add(18,"test")
// obj2.add("play","test")

// obj.add(10, 20);
// obj.subtract(30, 10);

class claculate {
  constructor(n1, n2) {
    console.log(n1 + n2);
  }

  subtract(n1, n2) {
    console.log(n1 - n2);
  }

  Print() {
    console.log("Nithin");
  }
}
const obj = new claculate(10, 20);

// obj.add(10, 20);

// A class can have only 1 constructor

//=============================================

// This keyword

class Thiskeyword {
  x = "Nithin";

  m1() {
    console.log("This is M1 Method");
  }

  m2() {
    console.log("This is M2 Method");
  }

  m3() {
    this.m1();
    console.log("This is M3 Method");
  }

  m4() {
    this.m3();
    console.log("This is M4 Method");
  }
}

const object = new Thiskeyword();

object.m4();

console.log(object.x);

//===============================================

// static keyword

class staticKeyword {
  static x = "bannu";

  y = "abhi";

  static m1() {
    console.log("This is M1 Method");
  }

  m2() {
    console.log("This is M2 Method");
  }

  static m3() {
    this.m1();
    console.log("This is M3 Method");
  }

  m4() {
    this.m3();
    console.log("This is M4 Method");
  }
}

// const object1 = new staticKeyword();

staticKeyword.m1(); // can call it without creating an object

console.log(staticKeyword.x);

staticKeyword.m3();

// object1.m4();  => this does not work, static can not be called in non static methods

// console.log(object1.y);

//=============================================
