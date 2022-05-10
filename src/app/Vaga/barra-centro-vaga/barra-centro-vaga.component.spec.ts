import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraCentroVagaComponent } from './barra-centro-vaga.component';

describe('BarraCentroVagaComponent', () => {
  let component: BarraCentroVagaComponent;
  let fixture: ComponentFixture<BarraCentroVagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraCentroVagaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraCentroVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
