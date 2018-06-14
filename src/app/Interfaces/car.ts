import { CarBrand } from './car-brand';
import { CarModel } from './car-model';

export class Car {
    id: number;
    cost: number;
    fuelConsumption: number;
    emission: number;
    carModel: CarModel;
    carBrand: CarBrand;
}
