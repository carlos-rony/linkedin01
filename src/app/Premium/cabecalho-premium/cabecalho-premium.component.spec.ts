import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecalhoPremiumComponent } from './cabecalho-premium.component';

describe('CabecalhoPremiumComponent', () => {
  let component: CabecalhoPremiumComponent;
  let fixture: ComponentFixture<CabecalhoPremiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabecalhoPremiumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabecalhoPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
