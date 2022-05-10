import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarContatosRedeComponent } from './gerenciar-contatos-rede.component';

describe('GerenciarContatosRedeComponent', () => {
  let component: GerenciarContatosRedeComponent;
  let fixture: ComponentFixture<GerenciarContatosRedeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciarContatosRedeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciarContatosRedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
