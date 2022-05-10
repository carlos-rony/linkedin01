import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarConfiguracoesComponent } from './gerenciar-configuracoes.component';

describe('GerenciarConfiguracoesComponent', () => {
  let component: GerenciarConfiguracoesComponent;
  let fixture: ComponentFixture<GerenciarConfiguracoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciarConfiguracoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciarConfiguracoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
