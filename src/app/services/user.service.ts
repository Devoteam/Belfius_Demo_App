import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CarBrand } from '../Interfaces/car-brand';
import { GET_ALL_CAR_BRANDS, handleApiError } from '../app.constants';

@Injectable({
    providedIn: 'root'
})
export class CarService {

    constructor(private http: HttpClient) {
    }

    login(): Observable<CarBrand[]> {
        return this.http.get<CarBrand[]>(GET_ALL_CAR_BRANDS)
            .pipe(
                catchError(handleApiError('getCarBrands', []))
            );
    }

}
