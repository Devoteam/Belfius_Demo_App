import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarModel } from '../../Interfaces/car-model';
import { CarService } from '../../services/car.service';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { RequestParams } from '../../app.constants';
import { resizeWindow } from '../../app.utils';

@Component({
    selector: 'app-car-models',
    templateUrl: './car-models.component.html',
    styleUrls: ['./car-models.component.scss']
})
export class CarModelsComponent implements OnInit {

    private carModels: CarModel[];
    private colAmount = 1;

    constructor(private carService: CarService,
                private route: ActivatedRoute,
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

    ngOnInit() {
        this.getCarModels();
    }

    getCarModels(): void {
        const carBrandId = +this.route.snapshot.paramMap.get(RequestParams.CAR_BRAND_ID);
        this.carService.getCarModels(carBrandId)
            .subscribe(carModels => this.carModels = carModels);
    }

}
