import { CarBrand } from './car-brand';
import { CarModel } from './car-model';

export interface Car {
    id: number;
    cost: number;
    fuelConsumption: number;
    emission: number;
    carModel: CarModel;
    carBrand: CarBrand;
}
