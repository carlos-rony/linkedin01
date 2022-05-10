import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpoMenssagensComponent } from './corpo-menssagens.component';

describe('CorpoMenssagensComponent', () => {
  let component: CorpoMenssagensComponent;
  let fixture: ComponentFixture<CorpoMenssagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorpoMenssagensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorpoMenssagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
