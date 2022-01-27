import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficernavItemComponent } from './officernav-item.component';

describe('OfficernavItemComponent', () => {
  let component: OfficernavItemComponent;
  let fixture: ComponentFixture<OfficernavItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficernavItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficernavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
