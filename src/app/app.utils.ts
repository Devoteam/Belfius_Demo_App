import { BehaviorSubject, Observable, of } from 'rxjs';

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

