import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GET_ALL_COMPANIES } from '../app.constants';
import { handleApiError } from '../app.utils';
import { Company } from '../Interfaces/company';

@Injectable({
    providedIn: 'root'
})
export class CompanyService {

    constructor(private http: HttpClient) {
    }

    getAllCompanies(): Observable<Company[]> {
        console.log(GET_ALL_COMPANIES);
        return this.http.get<Company[]>(GET_ALL_COMPANIES)
            .pipe(
                catchError(handleApiError('getAllCompanies', []))
            );
    }

}
