import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OarchitectureComponent } from './oarchitecture.component';

describe('OarchitectureComponent', () => {
  let component: OarchitectureComponent;
  let fixture: ComponentFixture<OarchitectureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OarchitectureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OarchitectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
