import { JWT_TOKEN_KEY } from './app.constants';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from './Interfaces/user';
import { JwtHelperService } from '@auth0/angular-jwt';

const jwtHelper = new JwtHelperService();

export const jwtToken = localStorage.getItem(JWT_TOKEN_KEY);

export function removeJwtTokenFromLocalstorage() {
    localStorage.clear();
}

export function getUserInformation() {
    const userInformation = jwtHelper.decodeToken(jwtToken);
    return new User(userInformation.sub, null);
}

export function handleApiError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
        console.error(`${operation} failed: ${error.message}`);
        console.error(error); // log to console instead
        // Let the app keep running by returning an empty result.
        return of(result as T);
    };
}

export function resizeWindow() {
    window.dispatchEvent(new Event('resize'));
}

export const loadingstatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

export function setLoadingStatus(status: boolean) {
    loadingstatus.next(status);
}

