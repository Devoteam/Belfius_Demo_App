import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { CarBrand } from '../../Interfaces/car-brand';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';

@Component({
    selector: 'app-car-overview',
    templateUrl: './car-overview.component.html',
    styleUrls: ['./car-overview.component.scss']
})
export class CarOverviewComponent implements OnInit {

    private carBrands: CarBrand[];
    private colAmount = 0;

    constructor(private carService: CarService,
                media: ObservableMedia) {
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
