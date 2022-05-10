"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagePatient = void 0;
var ManagePatient = /** @class */ (function () {
    function ManagePatient() {
        this.container = [];
        this.checkedContainer = [];
    }
    ManagePatient.prototype.enqueue = function () {
        var _a;
        var patient = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            patient[_i] = arguments[_i];
        }
        (_a = this.container).push.apply(_a, patient);
    };
    ManagePatient.prototype.dequeue = function () {
        for (var i = 0; i < this.container.length; i++) {
            for (var j = 0; j < this.container.length; j++) {
                if (this.container[i].code < this.container[j].code) {
                    var temp = this.container[i];
                    this.container[i] = this.container[j];
                    this.container[j] = temp;
                }
            }
        }
        var k = this.container.shift();
        this.checkedContainer.push(k);
        return k;
    };
    ManagePatient.prototype.showList = function () {
        for (var i = 0; i < this.container.length; i++) {
            console.log(this.container[i]);
        }
    };
    ManagePatient.prototype.showListChecked = function () {
        for (var i = 0; i < this.checkedContainer.length; i++) {
            console.log(this.checkedContainer[i]);
        }
    };
    return ManagePatient;
}());
exports.ManagePatient = ManagePatient;
