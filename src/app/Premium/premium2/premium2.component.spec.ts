import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Premium2Component } from './premium2.component';

describe('Premium2Component', () => {
  let component: Premium2Component;
  let fixture: ComponentFixture<Premium2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Premium2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Premium2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
