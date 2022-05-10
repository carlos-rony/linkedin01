import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpoVagaComponent } from './corpo-vaga.component';

describe('CorpoVagaComponent', () => {
  let component: CorpoVagaComponent;
  let fixture: ComponentFixture<CorpoVagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorpoVagaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorpoVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
