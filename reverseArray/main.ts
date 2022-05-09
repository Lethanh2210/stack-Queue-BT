import {Stack} from "./Stack";

let stack = new Stack<number>();
let reverseString: number[] = [];
let arr: number[] = [1,2,3,4,5,6];

for (let i = 0; i < arr.length; i++) {
    stack.push(arr[i]);
}
console.log(stack.container);
for (let i = 0; i < stack.size(); i++) {
    reverseString.push(stack.pop())
    i--;
}

console.log(reverseString);