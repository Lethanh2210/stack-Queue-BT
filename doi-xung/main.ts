import {Stack} from "./Stack";
import {Queue} from "./Queue";

let arr = 'abc cba';
let arr2 = 'abcd';
let stack = new Stack();
let queue = new Queue();


for (let i = 0; i < arr.length; i++) {
    stack.push(arr[i]);
    queue.enqueue(arr[i]);
}
function checkParall(arr){
    for (let i = 0; i < arr.length; i++) {
        stack.push(arr[i]);
        queue.enqueue(arr[i]);
    }
    for (let i = 0; i < stack.size(); i++) {
        if(stack.pop() !== queue.dequeue()){
            return false;
        }
    }
    return true;
}
if(checkParall(arr2)){
    console.log('chuoi doi xung');
}else console.log('chuoi khong doi xung');
