import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { BoxComponent } from './components/box/box.component';

import { HomeComponent } from './views/home/home.component';
import { HomeIntroComponent } from './views/home/home-intro/home-intro.component';
import { HomeBoxesComponent } from './views/home/home-boxes/home-boxes.component';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        BoxComponent,
        HomeComponent,
        HomeIntroComponent,
        HomeBoxesComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
