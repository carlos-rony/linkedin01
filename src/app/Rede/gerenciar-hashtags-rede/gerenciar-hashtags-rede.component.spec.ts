import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarHashtagsRedeComponent } from './gerenciar-hashtags-rede.component';

describe('GerenciarHashtagsRedeComponent', () => {
  let component: GerenciarHashtagsRedeComponent;
  let fixture: ComponentFixture<GerenciarHashtagsRedeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciarHashtagsRedeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciarHashtagsRedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
