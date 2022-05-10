import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuncioNotificacoesComponent } from './anuncio-notificacoes.component';

describe('AnuncioNotificacoesComponent', () => {
  let component: AnuncioNotificacoesComponent;
  let fixture: ComponentFixture<AnuncioNotificacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnuncioNotificacoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnuncioNotificacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
