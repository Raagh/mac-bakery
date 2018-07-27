import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsQuicklinksComponent } from './products-quicklinks.component';

describe('ProductsQuicklinksComponent', () => {
  let component: ProductsQuicklinksComponent;
  let fixture: ComponentFixture<ProductsQuicklinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsQuicklinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsQuicklinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
