import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagasBasePerfilComponent } from './vagas-base-perfil.component';

describe('VagasBasePerfilComponent', () => {
  let component: VagasBasePerfilComponent;
  let fixture: ComponentFixture<VagasBasePerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VagasBasePerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VagasBasePerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
