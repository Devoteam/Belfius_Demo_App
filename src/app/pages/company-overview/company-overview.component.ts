import { Component, OnInit } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { resizeWindow } from '../../app.utils';
import { Company } from '../../Interfaces/company';
import { CompanyService } from '../../services/company.service';

@Component({
    selector: 'app-company-overview',
    templateUrl: './company-overview.component.html',
    styleUrls: ['./company-overview.component.scss']
})
export class CompanyOverviewComponent implements OnInit {

    private companies: Company[];
    private colAmount = 1;

    constructor(private companyService: CompanyService, media: ObservableMedia) {
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
        this.getAllCompanies();
    }

    getAllCompanies(): void {
        this.companyService.getAllCompanies()
            .subscribe(companies => this.companies = companies);
    }

}
