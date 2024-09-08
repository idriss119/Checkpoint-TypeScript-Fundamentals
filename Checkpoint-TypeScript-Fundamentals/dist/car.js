"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log(`${this.make} ${this.model} (${this.year}) démarré`);
    }
}
exports.Car = Car;
//# sourceMappingURL=car.js.map