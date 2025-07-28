"use strict";
let x = 1;
x = "vansh";
console.log(x);
const greet = (firstname) => {
    console.log("Hello " + firstname);
};
greet("vansh");
//Type inferencing
const add = (a, b) => {
    return a + b;
};
let ans = add(4, 4);
console.log(add(1, 2));
//Function that takes function as an argument
function delayedFunc(func) {
    setTimeout(() => console.log(func(2, 3)), 1000);
}
delayedFunc(add);
