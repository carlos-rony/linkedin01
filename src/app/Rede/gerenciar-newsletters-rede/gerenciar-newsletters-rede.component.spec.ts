import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarNewslettersRedeComponent } from './gerenciar-newsletters-rede.component';

describe('GerenciarNewslettersRedeComponent', () => {
  let component: GerenciarNewslettersRedeComponent;
  let fixture: ComponentFixture<GerenciarNewslettersRedeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciarNewslettersRedeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciarNewslettersRedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
