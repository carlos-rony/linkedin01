import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuVagaComponent } from './menu-vaga.component';

describe('MenuVagaComponent', () => {
  let component: MenuVagaComponent;
  let fixture: ComponentFixture<MenuVagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuVagaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
