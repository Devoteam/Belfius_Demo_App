import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppContentComponent } from './layout/app-content/app-content.component';
import { CarOverviewComponent } from './pages/car-overview/car-overview.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CarModelsComponent } from './pages/car-models/car-models.component';
import { CarDetailComponent } from './pages/car-detail/car-detail.component';
import { RequestParams } from './app.constants';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'homepage',
    },
    {
        path: 'login',
        pathMatch: 'full',
        component: LoginComponent,
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
                component: CarOverviewComponent,
                path: 'cars/overview'
            },
            {
                component: CarModelsComponent,
                path: `cars/models/:${RequestParams.CAR_BRAND_ID}`
            },
            {
                component: CarDetailComponent,
                path: `cars/details/:${RequestParams.CAR_MODEL_ID}`
            }
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
