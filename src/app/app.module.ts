import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';

import { HomeComponent } from './views/home/home.component';
import { HomeIntroComponent } from './views/home/home-intro/home-intro.component';
import { HomeBoxesComponent } from './views/home/home-boxes/home-boxes.component';
import { HomeHeroComponent } from './views/home/home-hero/home-hero.component';
import { HomeHistoryComponent } from './views/home/home-history/home-history.component';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        HomeIntroComponent,
        HomeBoxesComponent,
        HomeHeroComponent,
        HomeHistoryComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
