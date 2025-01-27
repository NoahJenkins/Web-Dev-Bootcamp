//reference type

var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

//context vs scope
let globalVar = "I'm global";

function myFunction() {
  let localVar = "I'm local";
  console.log(globalVar); // accessible
  console.log(localVar); // accessible
}

console.log(globalVar); // accessible
console.log(localVar); // error: localVar is not defined

function globalContext() {
    console.log(this); // In a browser, 'this' refers to the global object (window)
  }
  
  const obj = {
    name: "Example",
    method: function() {
      console.log(this.name); // 'this' refers to obj here
    }
  }
  
  globalContext(); // logs the global object (window in browsers)
  obj.method(); // logs "Example"
  
// Scope determines the visibility of variables and functions.
// Context determines the value of this inside a function or method, based on how the function is called.

//insantiation

// Constructor: The function or class that defines the blueprint for creating objects.

// Instance: The individual object created based on a constructor or class.

// new keyword: The keyword that tells JavaScript to create a new object and invoke the constructor function or class.



//Example 1
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  
  const person1 = new Person("Alice", 30);
  const person2 = new Person("Bob", 25);
  
  console.log(person1.name); // "Alice"
  console.log(person2.age);  // 25


  //Example 2
  class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    displayInfo() {
      console.log(`${this.year} ${this.make} ${this.model}`);
    }
  }
  
  const car1 = new Car("Toyota", "Corolla", 2020);
  const car2 = new Car("Honda", "Civic", 2022);
  
  car1.displayInfo(); // "2020 Toyota Corolla"
  car2.displayInfo(); // "2022 Honda Civic"
  
  
//Example 3:
// The extends keyword in JavaScript is used for class inheritance. It allows one class to inherit properties and methods from another class, making it easier to create a hierarchy of classes and share functionality between them. 
  class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  const dog1 = new Dog("Buddy");
  dog1.speak(); // "Buddy barks."
  
  
  