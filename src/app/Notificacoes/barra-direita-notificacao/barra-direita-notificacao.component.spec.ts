import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraDireitaNotificacaoComponent } from './barra-direita-notificacao.component';

describe('BarraDireitaNotificacaoComponent', () => {
  let component: BarraDireitaNotificacaoComponent;
  let fixture: ComponentFixture<BarraDireitaNotificacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraDireitaNotificacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraDireitaNotificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
