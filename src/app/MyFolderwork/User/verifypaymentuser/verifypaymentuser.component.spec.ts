import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifypaymentuserComponent } from './verifypaymentuser.component';

describe('VerifypaymentuserComponent', () => {
  let component: VerifypaymentuserComponent;
  let fixture: ComponentFixture<VerifypaymentuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifypaymentuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifypaymentuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
