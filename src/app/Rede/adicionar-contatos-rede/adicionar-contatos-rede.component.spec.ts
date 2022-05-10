import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarContatosRedeComponent } from './adicionar-contatos-rede.component';

describe('AdicionarContatosRedeComponent', () => {
  let component: AdicionarContatosRedeComponent;
  let fixture: ComponentFixture<AdicionarContatosRedeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarContatosRedeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarContatosRedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
