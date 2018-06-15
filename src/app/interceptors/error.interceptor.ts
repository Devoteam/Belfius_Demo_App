import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class ErrorInterceptor implements ErrorHandler {

    constructor() {
    }

    handleError(error: any): void {
        console.error('It happens: ', error);
    }

}
