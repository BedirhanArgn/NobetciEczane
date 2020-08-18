import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurkeymapdetailsComponent } from './turkeymapdetails.component';

describe('TurkeymapdetailsComponent', () => {
  let component: TurkeymapdetailsComponent;
  let fixture: ComponentFixture<TurkeymapdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurkeymapdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurkeymapdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
