import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpoNotificacoesComponent } from './corpo-notificacoes.component';

describe('CorpoNotificacoesComponent', () => {
  let component: CorpoNotificacoesComponent;
  let fixture: ComponentFixture<CorpoNotificacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorpoNotificacoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorpoNotificacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
