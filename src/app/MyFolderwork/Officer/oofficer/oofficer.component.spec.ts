import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OofficerComponent } from './oofficer.component';

describe('OofficerComponent', () => {
  let component: OofficerComponent;
  let fixture: ComponentFixture<OofficerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OofficerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OofficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
