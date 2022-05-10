import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlaUsuarioComponent } from './ola-usuario.component';

describe('OlaUsuarioComponent', () => {
  let component: OlaUsuarioComponent;
  let fixture: ComponentFixture<OlaUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlaUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OlaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
