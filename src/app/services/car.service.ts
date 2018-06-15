import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CarBrand } from '../Interfaces/car-brand';
import { CarModel } from '../Interfaces/car-model';
import { Car } from '../Interfaces/car';
import { GET_ALL_CAR_BRANDS, GET_CAR_BY_CAR_MODEL_ID, GET_CAR_MODELS_BY_BRAND_ID } from '../app.constants';
import { handleApiError } from '../app.utils';

@Injectable({
    providedIn: 'root'
})
export class CarService {

    constructor(private http: HttpClient) {
    }

    getCarBrands(): Observable<CarBrand[]> {
        return this.http.get<CarBrand[]>(GET_ALL_CAR_BRANDS)
            .pipe(
                catchError(handleApiError('getCarBrands', []))
            );
    }

    getCarModels(carBrandId: number): Observable<CarModel[]> {
        return this.http.get<CarModel[]>(`${GET_CAR_MODELS_BY_BRAND_ID}${carBrandId}`)
            .pipe(
                catchError(handleApiError('getCarModels', []))
            );
    }

    getCar(carModelId: number): Observable<Car> {
        return this.http.get<Car>(`${GET_CAR_BY_CAR_MODEL_ID}${carModelId}`)
            .pipe(
                catchError(handleApiError('getCar', new Car()))
            );
    }

}
