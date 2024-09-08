"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const car_1 = require("./car");
const cars = [
    new car_1.Car('Toyota', 'Corolla', 2020),
    new car_1.Car('Honda', 'Civic', 2018),
    new car_1.Car('Ford', 'Mustang', 2021),
    new car_1.Car('Tesla', 'Model 3', 2022)
];
cars.forEach(car => car.start());
//# sourceMappingURL=main.js.map