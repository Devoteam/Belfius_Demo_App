import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { resizeWindow } from '../../app.utils';
import { Car } from '../../Interfaces/car';
import { ActivatedRoute } from '@angular/router';
import { RequestParams } from '../../app.constants';

@Component({
    selector: 'app-car-overview',
    templateUrl: './car-overview.component.html',
    styleUrls: ['./car-overview.component.scss']
})
export class CarOverviewComponent implements OnInit {

    private cars: Car[];
    private colAmount = 1;

    constructor(private carService: CarService, private route: ActivatedRoute, private media: ObservableMedia) {
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
        this.getCarsForComapy();
    }

    getCarsForComapy(): void {
        const companyId = +this.route.snapshot.paramMap.get(RequestParams.COMPANY_ID);
        this.carService.getAllCarsForcompany(companyId)
            .subscribe(cars => this.cars = cars);
    }

}
