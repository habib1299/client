import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfactureComponent } from './ofacture.component';

describe('OfactureComponent', () => {
  let component: OfactureComponent;
  let fixture: ComponentFixture<OfactureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfactureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
