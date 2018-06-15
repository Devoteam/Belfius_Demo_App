import { Component, Injectable, OnInit } from '@angular/core';
import { resizeWindow } from '../../app.utils';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss']
})

@Injectable()
export class HomepageComponent implements OnInit {

    constructor() {
        resizeWindow();
    }

    public ngOnInit() {
    }

}
