import { CarBrand } from './car-brand';

export interface CarModel {
    id: number;
    name: string;
    description: string;
    carBrand: CarBrand;
}
