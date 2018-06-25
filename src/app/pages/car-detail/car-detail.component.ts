import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Car } from '../../Interfaces/car';
import { ActivatedRoute } from '@angular/router';
import { resizeWindow } from '../../app.utils';
import { RequestParams } from '../../app.constants';

@Component({
    selector: 'app-car-detail',
    templateUrl: './car-detail.component.html',
    styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {

    private car: Car;
    private carImagePath: string;

    constructor(private carService: CarService, private route: ActivatedRoute) {
        resizeWindow();
    }

    ngOnInit() {
        this.getCarDetails();
    }

    getCarDetails(): void {
        const carId = +this.route.snapshot.paramMap.get(RequestParams.CAR_ID);
        this.carService.getCarDetailsById(carId)
            .subscribe(car => {
                this.car = car;
                this.createCarImagePath(car.brand, car.model);
            });
    }

    createCarImagePath(carBrandName, carModelName): void {
        carModelName = carModelName.replace(/\s/g, '_');
        this.carImagePath = `assets/images/cars/${carBrandName}/${carModelName}.jpg`;
    }

}
