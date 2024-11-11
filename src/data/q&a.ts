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
];
