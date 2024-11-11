export const data = [
  {
    core: "Beginner",
    question: "What is JavaScript?",
    answer:
      "JavaScript (often abbreviated as JS) is a high-level, versatile, and widely-used programming language primarily known for its role in web development. It enables interactive and dynamic behavior on websites.",
  },
  {
    core: "Beginner",
    question:
      "What is the difference between `var`, `let`, and `const` in JavaScript?",
    answer:
      "In JavaScript, var is function-scoped and was traditionally used to declare variables. let and const are block-scoped. The key difference between let and const is that let allows for reassignment while const creates a read-only reference.",
  },
  {
    core: "Beginner",
    question: "What is the difference between `null` and `undefined`?",
    answer:
      "The null is an assignment value. It can be assigned to a variable as a representation of no value. But the undefined is a primitive value that represents the absence of a value, or a variable that has not been assigned a value.",
  },
  {
    core: "Beginner",
    question: "What is the difference between `==` and `===`?",
    answer:
      "The == equality operator converts the operands if they are not of the same type, then applies strict comparison. The === strict equality operator only considers values equal that have the same type.",
  },
  {
    core: "Intermediate",
    question:
      "What are the different ways to declare a variable in JavaScript?",
    answer:
      "There are three ways to declare a variable in JavaScript var, let, and const..",
  },
  {
    core: "Intermediate",
    question: "What are Scopes in JavaScript?",
    answer:
      "A scope is a set of variables, objects, and functions that you have access to. There are three types of scopes in JavaScript. Which are Global Scope, Function Scope (Local Scope), and Block Scope.",
  },
  {
    core: "Intermediate",
    question: "What is ternary operator in JavaScript?",
    answer:
      "The ternary operator is a conditional operator that takes three operands. It is frequently used as a shortcut for the if statement.",
  },
  {
    core: "Advanced",
    question: "How to implement your own Custom Event in JavaScript?",
    answer:
      "You can use the CustomEvent constructor to create a custom event. The CustomEvent constructor accepts two arguments: the event name and an optional object that specifies the event options. And you can use the dispatchEvent method to dispatch the custom event on the target element/document.",
  },
  {
    core: "Advanced",
    question: "What is a closure in JavaScript?",
    answer:
      "A closure is a function that has access to its outer function scope even after the outer function has returned. This means a closure can remember and access variables and arguments of its outer function even after the function has finished.",
  },
  {
    core: "Intermediate",
    question: "Does Arrow functions have their own `this`?",
    answer:
      "No, arrow functions do not have their own this. Instead, they inherit the this of the enclosing lexical scope.",
  },
  {
    core: "Intermediate",
    question: "Does `map()` method mutate the original array?",
    answer:
      "No, the map() method does not mutate the original array. It returns a new array with the results of calling a provided function on every element in the calling array.",
  },
  {
    core: "Intermediate",
    question: "Does `forEach()` method return a new array?",
    answer:
      "No, the forEach() method does not return a new array. It simply calls a provided function on each element in the array.",
  },
  {
    core: "Intermediate",
    question: "How to use `filter()` method?",
    answer:
      "You can use the filter() method to filter an array based on a condition. The filter() method creates a new array with all elements that pass the test implemented by the provided function.",
  },
  {
    core: "Intermediate",
    question: "What is the difference between `map()` and `forEach()` methods?",
    answer:
      "The map() method creates a new array with the results of calling a provided function on every element in the calling array. Whereas, the forEach() method executes a provided function once for each array element.",
  },
  {
    core: "Intermediate",
    question: "How to use `reduce()` method?",
    answer:
      "You can use the reduce() method to reduce an array to a single value. The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.",
  },
  {
    core: "Intermediate",
    question:
      "What is the difference between </br> `map()` and `reduce()` methods?",
    answer:
      "The map() method creates a new array with the results of calling a provided function on every element in the calling array. Whereas, the reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.",
  },
  {
    core: "Advanced",
    question: "What is Prototype Chain in JavaScript?",
    answer:
      "The prototype chain in JavaScript refers to the chain of objects linked by their prototypes. When a property or method is accessed on an object, JavaScript first checks the object itself. If it doesn't find it there, it looks up the property or method in the object's prototype. This process continues, moving up the chain from one prototype to the next, until the property or method is found or the end of the chain is reached (typically the prototype of the base object, which is null). The prototype chain is fundamental to JavaScript's prototypal inheritance model, allowing objects to inherit properties and methods from other objects.",
  },
  {
    core: "Advanced",
    question: "What is IIFE in JavaScript?",
    answer:
      "The IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The IIFE is frequently used to create a new scope to avoid variable hoisting from within blocks.",
  },
  {
    core: "Advanced",
    question: "What is Inheritance in JavaScript?",
    answer:
      "Inheritance is a way to create a new Class from an existing Class. The new Class inherits all the properties and methods from the existing Class. The new Class is called the child Class, and the existing Class is called the parent Class.",
  },
  {
    core: "Beginner",
    question: "What is Map in JavaScript?",
    answer:
      "Map is another data structure in JavaScript which is similar to Object but the key can be of any type. It is a collection of elements where each element is stored as a Key, value pair. It is also known as a Hash table or a dictionary.The key can be of any type but the value can be of any type. The key is unique and immutable, whereas the value can be mutable or immutable.",
  },
  {
    core: "Beginner",
    question: "What is Set in JavaScript?",
    answer:
      "Set is another data structure in JavaScript which is similar to Array but the values are unique. It is a collection of elements where each element is stored as a value without any keys.",
  },
  {
    core: "Intermediate",
    question: "How you can find unique values in an array?",
    answer: "Intermediate",
  },
  {
    core: "Advanced",
    question: "What is a JavaScript promise?",
    answer:
      "A Promise in JavaScript represents a value that may not be available yet but will be at some point. Promises provide a way to handle asynchronous operations, offering methods like .then() and .catch() to register callbacks for success and failure.",
  },
  {
    core: "Advanced",
    question: "What is the purpose of the `async/await` in JavaScript?",
    answer:
      "The async/await, introduced in ES2017, provides a more readable and cleaner way to handle asynchronous operations compared to callbacks and promises. An async function always returns a promise, and within such a function, you can use await to pause execution until a promise settles.",
  },
  {
    core: "Advanced",
    question: "What is callback hell in JavaScript?",
    answer:
      "Callback hell, often referred to as Pyramid of Doom, describes a situation in JavaScript where multiple nested callbacks become difficult to manage, leading to unreadable and unmaintainable code. It often arises when performing multiple asynchronous operations that depend on the completion of previous operations. The code starts to take on a pyramidal shape due to the nesting.",
  },
  {
    core: "Beginner",
    question: "How to enable strict mode in JavaScript?",
    answer:
      "To enable strict mode in JavaScript, you need to add the following line at the top of the file or function 'use strict';.",
  },
];
