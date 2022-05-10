import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraDireitaVagaComponent } from './barra-direita-vaga.component';

describe('BarraDireitaVagaComponent', () => {
  let component: BarraDireitaVagaComponent;
  let fixture: ComponentFixture<BarraDireitaVagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraDireitaVagaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraDireitaVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
