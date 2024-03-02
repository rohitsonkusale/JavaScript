//# Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scorevalue = 100.3;
// console.log(typeof scorevalue); // Number

const isLoggedIn = true;
// console.log(typeof isLoggedIn); // boolean

const outsidetemp = null;
// console.log(typeof outsidetemp); // object

let userName;

const id = Symbol('123');
const anotherId = Symbol('123');
// console.log(typeof anotherId); // symbol

// console.log(id === anotherId);

const bigNumber = 123445678978445678951852656n;
// console.log(typeof bigNumber);  // bigint


// Reference {Non-Primitive}

// Arrays, Objects, Functions

const Heros = ["Rohit", "SpiderMan", "Iron-Man", "Thor"];
// console.log(Heros);
// console.log(typeof Heros); // object

let myObject = {
    name: "Rohit",
    age: 272,
    city: "Nagpur"
};
// console.log(typeof myObject); // object

const myFunction = function(){
    console.log("Hello World");
}
// myFunction();
// console.log(typeof myFunction); // object function or function object

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  Stack  (Primitive), Heap (Non-Primitive)

let myName = "Rohit";
let anothername = myName;
anothername = "javaScript";
console.log(myName);
console.log(anothername);

let userOne = {
    email : "userOne@gmail.com",
    upi : "UserOne@ybl"
};

// console.log(userOne);

let userTwo = userOne;
userTwo.email = "Rohit@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);

