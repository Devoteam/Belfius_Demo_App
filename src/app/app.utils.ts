import { JWT_TOKEN_KEY } from './app.constants';
import { HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from './Interfaces/user';

const jwt_decode = require('jwt-decode');

export const jwtToken = localStorage.getItem(JWT_TOKEN_KEY);

export function setJwtTokenInLocalstorage(token: string) {
    localStorage.setItem(JWT_TOKEN_KEY, token);
}

export function removeJwtTokenFromLocalstorage() {
    localStorage.clear();
}

export function getUserInformation() {
    const userInformation = jwt_decode(jwtToken);
    return new User(userInformation.sub);
}

export const JSON_HEADERS = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

export const JSON_HEADERS_WITH_RESPONSE = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
    observe: 'response'
};

export const AUTHORIZATION_HEADERS = {
    headers: new HttpHeaders({'Authorization': `Bearer ${jwtToken}`}),
};

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

