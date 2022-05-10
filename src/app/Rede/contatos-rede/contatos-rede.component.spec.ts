import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosRedeComponent } from './contatos-rede.component';

describe('ContatosRedeComponent', () => {
  let component: ContatosRedeComponent;
  let fixture: ComponentFixture<ContatosRedeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatosRedeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatosRedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
