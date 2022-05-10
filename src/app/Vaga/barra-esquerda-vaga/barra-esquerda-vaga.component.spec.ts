import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraEsquerdaVagaComponent } from './barra-esquerda-vaga.component';

describe('BarraEsquerdaVagaComponent', () => {
  let component: BarraEsquerdaVagaComponent;
  let fixture: ComponentFixture<BarraEsquerdaVagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraEsquerdaVagaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraEsquerdaVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
