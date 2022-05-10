import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendacaoVagaComponent } from './recomendacao-vaga.component';

describe('RecomendacaoVagaComponent', () => {
  let component: RecomendacaoVagaComponent;
  let fixture: ComponentFixture<RecomendacaoVagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecomendacaoVagaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomendacaoVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
