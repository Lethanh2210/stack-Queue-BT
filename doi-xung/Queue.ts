export class Queue<T>{
    container: T[] = [];

    constructor() {
    }

    enqueue(data: T):void{
        this.container.push(data);
    }

    dequeue():T | undefined{
        return this.container.shift();
    }

    size():number{
        return this.container.length;
    }
}