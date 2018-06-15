import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { getUserInformation, removeJwtTokenFromLocalstorage } from '../../app.utils';
import { User } from '../../Interfaces/user';

@Component({
    selector: 'app-nav',
    templateUrl: './app-nav.component.html',
    styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent implements OnInit {

    private user: User;

    constructor(private location: Location) {
    }

    public ngOnInit() {
        this.user = getUserInformation();
    }

    goBack(): void {
        this.location.back();
    }

    logout(): void {
        removeJwtTokenFromLocalstorage();
    }

}
