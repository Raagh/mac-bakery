import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    constructor() {
        this.isModalActive = false;
        this.modalTitle = "Ofertas!";
        this.modalText = "Gracias por subscribirte, recibiras las ofertas en tu mail por un 10% de descuento.";
    }

    public isModalActive: boolean;
    public modalTitle: string;
    public modalText: string;

    ngOnInit() {
    }

    subscribe() {
        this.isModalActive = !this.isModalActive;
    }

}
