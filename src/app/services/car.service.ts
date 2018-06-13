import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { CarBrand } from '../Interfaces/car-brand';
import { CarModel } from '../Interfaces/car-model';

@Injectable({
    providedIn: 'root'
})
export class CarService {
    private url1 = 'http://localhost:8080/api/cars/brands/all';
    private url2 = 'http://localhost:8080/api/cars/models?carBrandId=';

    constructor(private http: HttpClient) {
    }

    getCarBrands(): Observable<CarBrand[]> {
        return this.http.get<CarBrand[]>(this.url1)
            .pipe(
                catchError(this.handleError('getCarBrands', []))
            );
    }

    getCarModels(carBrandId: number): Observable<CarModel[]> {
        return this.http.get<CarModel[]>(`${this.url2}${carBrandId}`)
            .pipe(
                catchError(this.handleError('getCarModels', []))
            );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

}
