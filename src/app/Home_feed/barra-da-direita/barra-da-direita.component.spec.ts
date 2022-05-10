import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraDaDireitaComponent } from './barra-da-direita.component';

describe('BarraDaDireitaComponent', () => {
  let component: BarraDaDireitaComponent;
  let fixture: ComponentFixture<BarraDaDireitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraDaDireitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraDaDireitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
