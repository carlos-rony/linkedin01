import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraCentroRedeComponent } from './barra-centro-rede.component';

describe('BarraCentroRedeComponent', () => {
  let component: BarraCentroRedeComponent;
  let fixture: ComponentFixture<BarraCentroRedeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraCentroRedeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraCentroRedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
