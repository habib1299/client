import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OppartementComponent } from './oppartement.component';

describe('OppartementComponent', () => {
  let component: OppartementComponent;
  let fixture: ComponentFixture<OppartementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OppartementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OppartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
