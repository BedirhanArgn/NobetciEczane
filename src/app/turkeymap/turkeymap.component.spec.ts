import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurkeymapComponent } from './turkeymap.component';

describe('TurkeymapComponent', () => {
  let component: TurkeymapComponent;
  let fixture: ComponentFixture<TurkeymapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurkeymapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurkeymapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
