import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { LOGIN } from '../app.constants';
import { User } from '../Interfaces/user';
import { JSON_HEADERS_WITH_RESPONSE } from '../app.utils';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) {
    }

    login(user: User): Observable<any> {
        return this.http.post(LOGIN, user, JSON_HEADERS_WITH_RESPONSE)
            .pipe(
                catchError((err, caught) => {
                    return of(undefined);
                })
            );
    }

}
