import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficernavGroupComponent } from './officernav-group.component';

describe('OfficernavGroupComponent', () => {
  let component: OfficernavGroupComponent;
  let fixture: ComponentFixture<OfficernavGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficernavGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficernavGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
