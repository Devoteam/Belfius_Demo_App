import { Component, OnInit } from '@angular/core';
import { loadingstatus } from './app.utils';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    private showLoader: boolean;

    ngOnInit() {
        loadingstatus.subscribe(loadingStatus => {
            this.showLoader = loadingStatus;
        });
    }

}
