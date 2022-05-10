import {Patient} from "./Patient";

export class ManagePatient{
    container: Patient[] = [];
    checkedContainer: Patient[] = [];

    constructor() {
    }

    enqueue(...patient):void{
        this.container.push(...patient);
    }

    dequeue():Patient | undefined{
        for (let i = 0; i < this.container.length; i++) {
            for (let j = 0; j < this.container.length; j++) {
                if(this.container[i].code < this.container[j].code){
                    let temp: Patient = this.container[i];
                    this.container[i] = this.container[j];
                    this.container[j] = temp;
                }
            }
        }
        let k = this.container.shift();
        this.checkedContainer.push(k);

        return k;
    }

    showList():void{
        for (let i = 0; i < this.container.length; i++) {
            console.log(this.container[i]);
        }
    }

    showListChecked(): void{
        for (let i = 0; i < this.checkedContainer.length; i++) {
            console.log(this.checkedContainer[i]);
        }
    }
}