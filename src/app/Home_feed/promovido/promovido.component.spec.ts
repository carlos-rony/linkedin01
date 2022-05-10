import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromovidoComponent } from './promovido.component';

describe('PromovidoComponent', () => {
  let component: PromovidoComponent;
  let fixture: ComponentFixture<PromovidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromovidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromovidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
