"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack_1 = require("./Stack");
var stack = new Stack_1.Stack();
var reverseString = [];
var arr = [1, 2, 3, 4, 5, 6];
for (var i = 0; i < arr.length; i++) {
    stack.push(arr[i]);
}
console.log(stack.container);
for (var i = 0; i < stack.size(); i++) {
    reverseString.push(stack.pop());
    i--;
}
console.log(reverseString);
