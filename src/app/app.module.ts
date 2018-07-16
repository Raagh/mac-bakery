import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HistorySmallPanelComponent } from './components/history-small-panel/history-small-panel.component';

import { HomeComponent } from './views/home/home.component';
import { HomeIntroComponent } from './views/home/home-intro/home-intro.component';
import { HomeBoxesComponent } from './views/home/home-boxes/home-boxes.component';
import { HomeHeroComponent } from './views/home/home-hero/home-hero.component';
import { HomeHistoryComponent } from './views/home/home-history/home-history.component';
import { HeroExtraComponent } from './views/home/home-hero-extra/home-hero-extra.component';



@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        HomeIntroComponent,
        HomeBoxesComponent,
        HomeHeroComponent,
        HomeHistoryComponent,
        HistorySmallPanelComponent,
        HeroExtraComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
