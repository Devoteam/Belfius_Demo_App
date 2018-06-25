import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Car } from '../Interfaces/car';
import { GET_ALL_CAR_BRANDS, GET_CAR_BY_CAR_MODEL_ID, GET_CAR_MODELS_BY_BRAND_ID } from '../app.constants';
import { handleApiError } from '../app.utils';

@Injectable({
    providedIn: 'root'
})
export class CarService {

    constructor(private http: HttpClient) {
    }

    getCarBrands(): Observable<any[]> {
        return this.http.get<any[]>(GET_ALL_CAR_BRANDS)
            .pipe(
                catchError(handleApiError('getCarBrands', []))
            );
    }

    getCarModels(carBrandId: number): Observable<any[]> {
        return this.http.get<any[]>(`${GET_CAR_MODELS_BY_BRAND_ID}${carBrandId}`)
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
