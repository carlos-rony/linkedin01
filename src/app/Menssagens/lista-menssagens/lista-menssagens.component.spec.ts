import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMenssagensComponent } from './lista-menssagens.component';

describe('ListaMenssagensComponent', () => {
  let component: ListaMenssagensComponent;
  let fixture: ComponentFixture<ListaMenssagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaMenssagensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMenssagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
