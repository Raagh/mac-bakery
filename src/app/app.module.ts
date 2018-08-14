import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { HistorySmallPanelComponent } from './shared/history-small-panel/history-small-panel.component';
import { HeroContactComponent } from './shared/hero-contact/hero-contact.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NotificationModalComponent } from './shared/notification-modal/notification-modal.component';

import { HomeComponent } from './views/home/home.component';
import { HomeIntroComponent } from './views/home/home-intro/home-intro.component';
import { HomeBoxesComponent } from './views/home/home-boxes/home-boxes.component';
import { HomeHeroComponent } from './views/home/home-hero/home-hero.component';
import { HomeHistoryComponent } from './views/home/home-history/home-history.component';

import { ProductsComponent } from './views/products/products.component';
import { ProductsQuicklinksComponent } from './views/products/products-quicklinks/products-quicklinks.component';
import { ProductsIntroComponent } from './views/products/products-intro/products-intro.component';
import { ProductsCarrouselComponent } from './views/products/products-carrousel/products-carrousel.component';

import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';


const appRoutes: Routes = [
    { path: 'products', component: ProductsComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

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
        HeroContactComponent,
        FooterComponent,
        NotificationModalComponent,
        ProductsComponent,
        ProductsQuicklinksComponent,
        ProductsIntroComponent,
        ProductsCarrouselComponent,
        AboutComponent,
        ContactComponent
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true }
        ),
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
