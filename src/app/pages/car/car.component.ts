import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

    private carBrands: string;

    constructor() {
    }

    public ngOnInit() {
    }

}
