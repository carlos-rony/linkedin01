import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpoRedeComponent } from './corpo-rede.component';

describe('CorpoRedeComponent', () => {
  let component: CorpoRedeComponent;
  let fixture: ComponentFixture<CorpoRedeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorpoRedeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorpoRedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
