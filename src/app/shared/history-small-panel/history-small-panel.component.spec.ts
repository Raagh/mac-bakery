import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorySmallPanelComponent } from './history-small-panel.component';

describe('HistorySmallPanelComponent', () => {
  let component: HistorySmallPanelComponent;
  let fixture: ComponentFixture<HistorySmallPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorySmallPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorySmallPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
