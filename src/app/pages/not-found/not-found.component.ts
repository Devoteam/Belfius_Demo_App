import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

@Component({
    selector: 'app-profile',
    templateUrl: './not-found.component.html',
    styleUrls: [ './not-found.component.css' ]
})

@Injectable()
export class NotFoundComponent implements OnInit {

    constructor() {
    }

    public ngOnInit() {
        window.dispatchEvent(new Event('resize'));
    }

}
