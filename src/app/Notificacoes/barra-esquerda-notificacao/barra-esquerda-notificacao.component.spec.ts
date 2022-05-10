import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraEsquerdaNotificacaoComponent } from './barra-esquerda-notificacao.component';

describe('BarraEsquerdaNotificacaoComponent', () => {
  let component: BarraEsquerdaNotificacaoComponent;
  let fixture: ComponentFixture<BarraEsquerdaNotificacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraEsquerdaNotificacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraEsquerdaNotificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
