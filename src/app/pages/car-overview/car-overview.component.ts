import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { resizeWindow } from '../../app.utils';

@Component({
    selector: 'app-car-overview',
    templateUrl: './car-overview.component.html',
    styleUrls: ['./car-overview.component.scss']
})
export class CarOverviewComponent implements OnInit {

    private carBrands: any[];
    private colAmount = 1;

    constructor(private carService: CarService,
                media: ObservableMedia) {
        resizeWindow();
        media.asObservable()
            .subscribe((change: MediaChange) => {
                if (change.mqAlias === 'lg') {
                    this.colAmount = 2;
                } else {
                    this.colAmount = 1;
                }
            });
    }

    public ngOnInit() {
        this.getCarBrands();
    }

    getCarBrands(): void {
        this.carService.getCarBrands()
            .subscribe(carBrands => this.carBrands = carBrands);
    }

}
