import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarPageRedeComponent } from './gerenciar-page-rede.component';

describe('GerenciarPageRedeComponent', () => {
  let component: GerenciarPageRedeComponent;
  let fixture: ComponentFixture<GerenciarPageRedeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciarPageRedeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciarPageRedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
