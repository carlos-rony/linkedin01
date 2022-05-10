import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraEsquerdaRedeComponent } from './barra-esquerda-rede.component';

describe('BarraEsquerdaRedeComponent', () => {
  let component: BarraEsquerdaRedeComponent;
  let fixture: ComponentFixture<BarraEsquerdaRedeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraEsquerdaRedeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraEsquerdaRedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
