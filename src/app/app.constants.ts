import { environment } from '../environments/environment';
import { Observable, of } from 'rxjs';

// Base API URL
const BASE_API_URL = environment.BASE_API_URL;

// Cars
const CAR_PREFIX = '/cars';
const CAR_BRANDS_PREFIX = '/brands';
const CAR_MODELS_PREFIX = '/models';

export const GET_ALL_CAR_BRANDS = `${BASE_API_URL}${CAR_PREFIX}${CAR_BRANDS_PREFIX}/all`;
export const GET_CAR_MODELS_BY_BRAND_ID = `${BASE_API_URL}${CAR_PREFIX}${CAR_MODELS_PREFIX}?carBrandId=`;


export function handleApiError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
        console.error(`${operation} failed: ${error.message}`);
        console.error(error); // log to console instead
        // Let the app keep running by returning an empty result.
        return of(result as T);
    };
}
