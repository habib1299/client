import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerNavigationComponent } from './officer-navigation.component';

describe('OfficerNavigationComponent', () => {
  let component: OfficerNavigationComponent;
  let fixture: ComponentFixture<OfficerNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficerNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
