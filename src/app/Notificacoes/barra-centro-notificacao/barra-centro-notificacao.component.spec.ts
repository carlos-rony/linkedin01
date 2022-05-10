import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraCentroNotificacaoComponent } from './barra-centro-notificacao.component';

describe('BarraCentroNotificacaoComponent', () => {
  let component: BarraCentroNotificacaoComponent;
  let fixture: ComponentFixture<BarraCentroNotificacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraCentroNotificacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraCentroNotificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
