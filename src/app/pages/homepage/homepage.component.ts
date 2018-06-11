import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: [ './homepage.component.css' ]
})

@Injectable()
export class HomepageComponent implements OnInit {

    constructor() {
    }

    public ngOnInit() {
        window.dispatchEvent(new Event('resize'));
    }
}
