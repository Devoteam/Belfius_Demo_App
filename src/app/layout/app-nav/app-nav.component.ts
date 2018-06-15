import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { removeJwtTokenFromLocalstorage } from '../../app.utils';

@Component({
    selector: 'app-nav',
    templateUrl: './app-nav.component.html',
    styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent implements OnInit {

    constructor(private location: Location) {
    }

    public ngOnInit() {
    }

    goBack(): void {
        this.location.back();
    }

    logout(): void {
        removeJwtTokenFromLocalstorage();
    }

}
