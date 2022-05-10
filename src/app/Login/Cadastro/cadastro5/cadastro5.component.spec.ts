import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cadastro5Component } from './cadastro5.component';

describe('Cadastro5Component', () => {
  let component: Cadastro5Component;
  let fixture: ComponentFixture<Cadastro5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cadastro5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cadastro5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
