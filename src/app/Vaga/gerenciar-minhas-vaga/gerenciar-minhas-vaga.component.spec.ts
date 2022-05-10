import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarMinhasVagaComponent } from './gerenciar-minhas-vaga.component';

describe('GerenciarMinhasVagaComponent', () => {
  let component: GerenciarMinhasVagaComponent;
  let fixture: ComponentFixture<GerenciarMinhasVagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciarMinhasVagaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciarMinhasVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
