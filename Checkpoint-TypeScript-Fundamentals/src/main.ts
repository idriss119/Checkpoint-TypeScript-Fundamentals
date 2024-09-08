import { Car } from './car';
const cars: Car[] = [
  new Car('Toyota', 'Corolla', 2020),
  new Car('BMW', 'X5', 2016),
  new Car('Ford', 'Mustang', 2021),
  new Car('Mercedes', 'E124 250 D', 1993)
];
cars.forEach(car => car.start());


