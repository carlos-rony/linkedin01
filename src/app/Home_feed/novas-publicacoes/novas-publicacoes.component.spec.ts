import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovasPublicacoesComponent } from './novas-publicacoes.component';

describe('NovasPublicacoesComponent', () => {
  let component: NovasPublicacoesComponent;
  let fixture: ComponentFixture<NovasPublicacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovasPublicacoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovasPublicacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
