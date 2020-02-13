// print the function below
// function myNumberFunction() {
//   let num = 2 ** 2;
//   num = num + 3;
//   num = num % 4;
//   num = num * 14;
//   console.log(num);
// }
// console.log(myNumberFunction);
// myNumberFunction();

// now, invoke the myNumberFunction function

// print just the function of console.log (no invocation)

// print the function below
// function myNumberFunction() {
//   let num = 2 ** 2;
//   num = num + 3;
//   num = num % 4;
//   num = num * 14;
//   console.log(num);
// }
// function check(num) {
//   if (num > 5) {
//     return "Greater than 5";
//   }
// }
// now, invoke the myNumberFunction function

// print just the function of console.log (no invocation)

// ? what does the function below return?
// function myNumberFunction() {
//   let num = 2 ** 2;
//   num = num + 3;
//   num = num % 4;
//   num = num * 14;
//   return num;
// }
// console.log(myNumberFunction());
// change the function above to return a value

// Short Circuiting
// ! the console.log will not print
// function shortCircuitFunction() {
//   return "Zap! - Short Circuited!";
//   console.log("This will never print because it is after the return statement.");
// }

// ? will the following function short circuit?
// let height = 50;
// function checkCircusRides() {
//   if (height < 48) {
//     console.log("Take a ride on the carousel!");
//   }
//   if (height < 60) {
//     console.log("Try the bumper cars!");
//   }
//   console.log("Enjoy the roller coaster!");
// }

// change the function above to use short circuiting

// Named Parameters
//function test(a, b)

// write a function that takes two named parameters:
// function test(a, b) {
//   console.log(a)
//   console.log(b)
// }

// print each named parameter,
// function test(a, b) {
//   console.log(a)
//   console.log(b)
// }

// then return the parameters added together
// function test(a, b) {
//   console.log(a)
//   console.log(b)
//   return a + b
// }

// invoke the function and pass in two numbers
// x(1, 2);

// invoke the function and pass in more than two numbers
// x(1, 2, 3, 5);
// invoke the function and pass in only one number

// change the function to set default values for the parameters
// function test (1, 2)
// again, invoke the function and pass in only one number
// function test(1, b)
// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator

// again, invoke the function and pass in more than two numbers

// wrap the code below in a function called "addNumbersFrom1To100" and return the total
// ! do not use console.log inside your function

// let total = 0;
// for (let i = 1; i <= 100; i++) {
//   total += i;
// }

// invoke the function and console.log its value
// function addNumbersFrom1To100() {
//   let total = 0;
//   for (let i = 1; i <= 100; i++) {
//     total += i;
//   }
// }
// try to print the variable "total"
// console.log(total);
// ? what do you expect ?

// examine the code below,
// ? which console.log statement will not print when you invoke the parentAndChildScope function ?
function childScope(param) {
  const childVariable = "I am in the child's scope";
  console.log("Child Scope, Parent Variable:", param);
  console.log("Child Scope, Child Variable:", childVariable);
}
console.log(childScope);

function parentAndChildScope() {
  const parentVariable = "I am in the parent's scope";
  childScope(parentVariable);
  console.log("Parent Scope, Parent Variable:", parentVariable);
  console.log("Parent Scope, Child Variable:", childVariable);
}
parentAndChildScope;
