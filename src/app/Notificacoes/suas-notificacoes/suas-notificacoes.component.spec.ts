import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuasNotificacoesComponent } from './suas-notificacoes.component';

describe('SuasNotificacoesComponent', () => {
  let component: SuasNotificacoesComponent;
  let fixture: ComponentFixture<SuasNotificacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuasNotificacoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuasNotificacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
