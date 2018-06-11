import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-nav',
    styleUrls: [ './app-nav.component.css' ],
    templateUrl: './app-nav.component.html'
})
export class AppNavComponent implements OnInit{

    constructor() {

    }

    public ngOnInit() {
        window.dispatchEvent(new Event('resize'));
    }
}
