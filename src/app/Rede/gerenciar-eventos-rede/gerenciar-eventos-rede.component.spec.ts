import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarEventosRedeComponent } from './gerenciar-eventos-rede.component';

describe('GerenciarEventosRedeComponent', () => {
  let component: GerenciarEventosRedeComponent;
  let fixture: ComponentFixture<GerenciarEventosRedeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciarEventosRedeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciarEventosRedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
