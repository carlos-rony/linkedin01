import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversaMenssagensComponent } from './conversa-menssagens.component';

describe('ConversaMenssagensComponent', () => {
  let component: ConversaMenssagensComponent;
  let fixture: ComponentFixture<ConversaMenssagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversaMenssagensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversaMenssagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
