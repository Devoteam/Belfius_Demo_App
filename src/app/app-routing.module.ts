import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppContentComponent } from './layout/app-content/app-content.component';
import { CarOverviewComponent } from './pages/car-overview/car-overview.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RequestParams } from './app.constants';
import { CompanyOverviewComponent } from './pages/company-overview/company-overview.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'homepage',
    },
    {
        path: '',
        component: AppContentComponent,
        children: [
            {
                component: HomepageComponent,
                path: 'homepage'
            },
            {
                component: CompanyOverviewComponent,
                path: 'companies/overview'
            },
            {
                component: CarOverviewComponent,
                path: `cars/overview/:${RequestParams.COMPANY_ID}`
            },
            // {
            //     component: CarDetailComponent,
            //     path: `cars/details/:${RequestParams.CAR_MODEL_ID}`
            // }
        ]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {
}
