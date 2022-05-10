import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarConvitesRedeComponent } from './gerenciar-convites-rede.component';

describe('GerenciarConvitesRedeComponent', () => {
  let component: GerenciarConvitesRedeComponent;
  let fixture: ComponentFixture<GerenciarConvitesRedeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciarConvitesRedeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciarConvitesRedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
