import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacaoSingleComponent } from './notificacao-single.component';

describe('NotificacaoSingleComponent', () => {
  let component: NotificacaoSingleComponent;
  let fixture: ComponentFixture<NotificacaoSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificacaoSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificacaoSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
