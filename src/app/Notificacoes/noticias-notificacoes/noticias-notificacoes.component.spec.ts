import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasNotificacoesComponent } from './noticias-notificacoes.component';

describe('NoticiasNotificacoesComponent', () => {
  let component: NoticiasNotificacoesComponent;
  let fixture: ComponentFixture<NoticiasNotificacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiasNotificacoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasNotificacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
