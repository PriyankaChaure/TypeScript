"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Engine_1 = require("./Engine");
var Break_1 = require("./Break");
var Accelator_1 = require("./Accelator");
var Car = /** @class */ (function () {
    function Car() {
        this.e = new Engine_1.Engine();
        this.b = new Break_1.Break();
        this.a = new Accelator_1.Accelator();
    }
    Car.prototype.Run = function () {
        this.e.start();
        this.b.Break();
        this.a.Accelator();
        console.log("Car Is Running!");
    };
    return Car;
}());
var c = new Car();
c.Run();
