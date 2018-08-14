import { Component, OnInit, Input, SimpleChanges, Output } from '@angular/core';

@Component({
    selector: 'app-notification-modal',
    templateUrl: './notification-modal.component.html',
    styleUrls: ['./notification-modal.component.scss']
})
export class NotificationModalComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        this.isActive = false;
    }

    @Input()
    isActive: boolean;

    @Input()
    title: string;

    @Input()
    text: string;

    closeModal() {
        this.isActive = false;
    }

}
