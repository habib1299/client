import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficernavCollapseComponent } from './officernav-collapse.component';

describe('OfficernavCollapseComponent', () => {
  let component: OfficernavCollapseComponent;
  let fixture: ComponentFixture<OfficernavCollapseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficernavCollapseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficernavCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
