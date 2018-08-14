import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    public modalTitle: string;
    public modalText: string;
    public isModalActive: boolean;

    constructor() {
        this.modalTitle = "Contacto!";
        this.modalText = "Gracias por contactarte conmigo, te respondere a tu mail a la brevedad!.";
        this.isModalActive = false;
    }

    ngOnInit() {
    }

    sendMessage() {
        this.isModalActive = !this.isModalActive;
    }

}
