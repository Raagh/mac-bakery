import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroExtraComponent } from './home-hero-extra.component';

describe('HeroExtraComponent', () => {
    let component: HeroExtraComponent;
    let fixture: ComponentFixture<HeroExtraComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HeroExtraComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeroExtraComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
