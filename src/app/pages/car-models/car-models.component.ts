import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CarModel } from '../../Interfaces/car-model';
import { CarService } from '../../services/car.service';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';

@Component({
    selector: 'app-car-models',
    templateUrl: './car-models.component.html',
    styleUrls: ['./car-models.component.css']
})
export class CarModelsComponent implements OnInit {

    private carModels: CarModel[];
    private colAmount = 0;

    constructor(private carService: CarService,
                private route: ActivatedRoute,
                private location: Location,
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
