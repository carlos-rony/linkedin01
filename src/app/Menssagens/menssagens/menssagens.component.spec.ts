import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenssagensComponent } from './menssagens.component';

describe('MenssagensComponent', () => {
  let component: MenssagensComponent;
  let fixture: ComponentFixture<MenssagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenssagensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenssagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
