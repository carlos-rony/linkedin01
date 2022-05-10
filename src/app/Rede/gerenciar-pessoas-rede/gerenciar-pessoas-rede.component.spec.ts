import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarPessoasRedeComponent } from './gerenciar-pessoas-rede.component';

describe('GerenciarPessoasRedeComponent', () => {
  let component: GerenciarPessoasRedeComponent;
  let fixture: ComponentFixture<GerenciarPessoasRedeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciarPessoasRedeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciarPessoasRedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
