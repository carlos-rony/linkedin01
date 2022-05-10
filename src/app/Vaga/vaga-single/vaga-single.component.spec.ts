import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagaSingleComponent } from './vaga-single.component';

describe('VagaSingleComponent', () => {
  let component: VagaSingleComponent;
  let fixture: ComponentFixture<VagaSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VagaSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VagaSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
