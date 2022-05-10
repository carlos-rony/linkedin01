import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarRedeComponent } from './gerenciar-rede.component';

describe('GerenciarRedeComponent', () => {
  let component: GerenciarRedeComponent;
  let fixture: ComponentFixture<GerenciarRedeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciarRedeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciarRedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
