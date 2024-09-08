import { Vehicle } from './vehicle';

export class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log(`${this.make} ${this.model} (${this.year}) démarré`);
  }
}

