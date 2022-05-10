import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagaDSComponent } from './vaga-ds.component';

describe('VagaDSComponent', () => {
  let component: VagaDSComponent;
  let fixture: ComponentFixture<VagaDSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VagaDSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VagaDSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
