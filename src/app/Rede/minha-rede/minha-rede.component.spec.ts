import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaRedeComponent } from './minha-rede.component';

describe('MinhaRedeComponent', () => {
  let component: MinhaRedeComponent;
  let fixture: ComponentFixture<MinhaRedeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinhaRedeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhaRedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
