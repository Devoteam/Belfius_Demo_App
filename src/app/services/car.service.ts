import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Car } from '../Interfaces/car';
import { handleApiError } from '../app.utils';
import { GAT_ALL_CARS_FOR_COMPANY, GET_CAR_DETAILS_BY_ID } from '../app.constants';

@Injectable({
    providedIn: 'root'
})
export class CarService {

    constructor(private http: HttpClient) {
    }

    getAllCarsForcompany(companyId: number): Observable<Car[]> {
        return this.http.get<Car[]>(`${GAT_ALL_CARS_FOR_COMPANY}${companyId}`)
            .pipe(
                catchError(handleApiError('getAllCarsForcompany', []))
            );
    }

    getCarDetailsById(carId: number): Observable<Car> {
        return this.http.get<Car>(`${GET_CAR_DETAILS_BY_ID}${carId}`)
            .pipe(
                catchError(handleApiError('getCarDetailsById'))
            );
    }

}
