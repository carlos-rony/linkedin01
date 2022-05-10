import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagensNotificacoesComponent } from './mensagens-notificacoes.component';

describe('MensagensNotificacoesComponent', () => {
  let component: MensagensNotificacoesComponent;
  let fixture: ComponentFixture<MensagensNotificacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensagensNotificacoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensagensNotificacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
