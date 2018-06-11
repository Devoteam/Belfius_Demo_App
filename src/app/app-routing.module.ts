import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppContentComponent } from './layout/app-content/app-content.component';
import { CarComponent } from './pages/car/car.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

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
                component: CarComponent,
                path: 'cars'
            },
            {
                path: '404',
                component: NotFoundComponent
            },
            {
                path: '**',
                redirectTo: '404'
            }
        ]
    }
];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {
}
