import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarAvalicoesVagaComponent } from './gerenciar-avalicoes-vaga.component';

describe('GerenciarAvalicoesVagaComponent', () => {
  let component: GerenciarAvalicoesVagaComponent;
  let fixture: ComponentFixture<GerenciarAvalicoesVagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciarAvalicoesVagaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciarAvalicoesVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
