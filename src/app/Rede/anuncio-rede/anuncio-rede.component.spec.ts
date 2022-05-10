import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuncioRedeComponent } from './anuncio-rede.component';

describe('AnuncioRedeComponent', () => {
  let component: AnuncioRedeComponent;
  let fixture: ComponentFixture<AnuncioRedeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnuncioRedeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnuncioRedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
