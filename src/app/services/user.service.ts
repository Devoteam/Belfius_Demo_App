import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { LOGIN } from '../app.constants';
import { User } from '../Interfaces/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) {
    }

    login(user: User): Observable<any> {
        return this.http.post(LOGIN, user, {
            headers: new HttpHeaders({'Content-Type': 'application/json'}),
            observe: 'response',
        })
            .pipe(
                catchError((err, caught) => {
                    return of(undefined);
                })
            );
    }

}
