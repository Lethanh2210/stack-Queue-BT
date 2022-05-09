"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack_1 = require("./Stack");
var Queue_1 = require("./Queue");
var arr = 'abc cba';
var arr2 = 'abcd';
var stack = new Stack_1.Stack();
var queue = new Queue_1.Queue();
for (var i = 0; i < arr.length; i++) {
    stack.push(arr[i]);
    queue.enqueue(arr[i]);
}
function checkParall(arr) {
    for (var i = 0; i < arr.length; i++) {
        stack.push(arr[i]);
        queue.enqueue(arr[i]);
    }
    for (var i = 0; i < stack.size(); i++) {
        if (stack.pop() !== queue.dequeue()) {
            return false;
        }
    }
    return true;
}
if (checkParall(arr2)) {
    console.log('chuoi doi xung');
}
else
    console.log('chuoi khong doi xung');
