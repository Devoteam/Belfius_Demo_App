import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppContentComponent } from './layout/app-content/app-content.component';
import { AppFooterComponent } from './layout/app-footer/app-footer.component';
import { AppNavComponent } from './layout/app-nav/app-nav.component';
import { CarComponent } from './pages/car/car.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';

const layout = [
    AppComponent,
    AppNavComponent,
    AppContentComponent,
    AppFooterComponent,
];

const components = [
    HomepageComponent,
    NotFoundComponent,
    CarComponent,
];

const modules = [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
];

const routing = [
    AppRoutingModule,
];

@NgModule( {
    bootstrap: [AppComponent],
    declarations: [
        layout,
        components
    ],
    imports: [
        modules,
        routing
    ]
})
export class AppModule {
}
