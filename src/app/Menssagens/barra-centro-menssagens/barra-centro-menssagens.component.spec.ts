import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraCentroMenssagensComponent } from './barra-centro-menssagens.component';

describe('BarraCentroMenssagensComponent', () => {
  let component: BarraCentroMenssagensComponent;
  let fixture: ComponentFixture<BarraCentroMenssagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraCentroMenssagensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraCentroMenssagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
