import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CarModel } from '../../Interfaces/car-model';
import { CarService } from '../../services/car.service';

@Component({
    selector: 'app-car-models',
    templateUrl: './car-models.component.html',
    styleUrls: ['./car-models.component.css']
})
export class CarModelsComponent implements OnInit {

    private carModels: CarModel[];

    constructor(private carService: CarService, private route: ActivatedRoute, private location: Location) {
    }

    ngOnInit() {
        this.getCarModels();
    }

    getCarModels(): void {
        const carBrandId = +this.route.snapshot.paramMap.get('id');
        this.carService.getCarModels(carBrandId)
            .subscribe(carModels => this.carModels = carModels);
    }

    goBack(): void {
        this.location.back();
    }
}
