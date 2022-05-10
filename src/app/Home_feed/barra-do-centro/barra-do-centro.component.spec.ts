import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraDoCentroComponent } from './barra-do-centro.component';

describe('BarraDoCentroComponent', () => {
  let component: BarraDoCentroComponent;
  let fixture: ComponentFixture<BarraDoCentroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraDoCentroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraDoCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
