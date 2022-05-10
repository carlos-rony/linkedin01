import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarPerfisComponent } from './adicionar-perfis.component';

describe('AdicionarPerfisComponent', () => {
  let component: AdicionarPerfisComponent;
  let fixture: ComponentFixture<AdicionarPerfisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarPerfisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarPerfisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
