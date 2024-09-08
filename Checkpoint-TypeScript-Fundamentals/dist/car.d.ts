import { Vehicle } from './vehicle';
export declare class Car implements Vehicle {
    make: string;
    model: string;
    year: number;
    constructor(make: string, model: string, year: number);
    start(): void;
}
