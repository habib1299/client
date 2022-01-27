import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficernavContentComponent } from './officernav-content.component';

describe('OfficernavContentComponent', () => {
  let component: OfficernavContentComponent;
  let fixture: ComponentFixture<OfficernavContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficernavContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficernavContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
