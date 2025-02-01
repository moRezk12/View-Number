import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewnumberComponent } from './viewnumber.component';

describe('ViewnumberComponent', () => {
  let component: ViewnumberComponent;
  let fixture: ComponentFixture<ViewnumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewnumberComponent]
    });
    fixture = TestBed.createComponent(ViewnumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
