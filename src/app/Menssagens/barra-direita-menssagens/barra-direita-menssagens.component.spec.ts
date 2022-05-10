import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraDireitaMenssagensComponent } from './barra-direita-menssagens.component';

describe('BarraDireitaMenssagensComponent', () => {
  let component: BarraDireitaMenssagensComponent;
  let fixture: ComponentFixture<BarraDireitaMenssagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraDireitaMenssagensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraDireitaMenssagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
