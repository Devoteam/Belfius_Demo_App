import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Car } from '../../Interfaces/car';
import { ActivatedRoute } from '@angular/router';
import { resizeWindow } from '../../app.utils';

@Component({
    selector: 'app-car-detail',
    templateUrl: './car-detail.component.html',
    styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {

    private car: Car;
    private carImagePath: string;

    constructor(private carService: CarService,
                private route: ActivatedRoute) {
        resizeWindow();
    }

    ngOnInit() {
        // this.getCar();
    }

    getCar(): void {
        // const carModelId = +this.route.snapshot.paramMap.get(RequestParams.CAR_MODEL_ID);
    }

    createCarImagePath(carBrandName, carModelName): void {
        carModelName = carModelName.replace(/\s/g, '_');
        this.carImagePath = `assets/images/cars/${carBrandName}/${carModelName}.jpg`;
    }

}
