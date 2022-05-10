import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraDaEsquerdaComponent } from './barra-da-esquerda.component';

describe('BarraDaEsquerdaComponent', () => {
  let component: BarraDaEsquerdaComponent;
  let fixture: ComponentFixture<BarraDaEsquerdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraDaEsquerdaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraDaEsquerdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
