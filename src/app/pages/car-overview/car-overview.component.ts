import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { CarBrand } from '../../Interfaces/car-brand';

@Component({
    selector: 'app-car-overview',
    templateUrl: './car-overview.component.html',
    styleUrls: ['./car-overview.component.scss']
})
export class CarOverviewComponent implements OnInit {

    private carBrands: CarBrand[];

    constructor(private carService: CarService) {
    }

    public ngOnInit() {
        this.getCarBrands();
    }

    getCarBrands(): void {
        this.carService.getCarBrands()
            .subscribe(carBrands => this.carBrands = carBrands);
    }

}
