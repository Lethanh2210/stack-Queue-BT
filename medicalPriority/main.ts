import {Patient} from "./Patient";
import {ManagePatient} from "./ManagePatient";

let patient1 = new Patient('Smith',5);
let patient2 = new Patient('Jones',4);
let patient3 = new Patient('Fehrenbach',6);
let patient4 = new Patient('Brown',1);
let patient5 = new Patient('Ingram',1);

let manager = new ManagePatient();

manager.enqueue(patient1,patient2,patient3,patient4,patient5);

manager.showList();

console.log(manager.dequeue().name);

manager.showList();

manager.showListChecked();