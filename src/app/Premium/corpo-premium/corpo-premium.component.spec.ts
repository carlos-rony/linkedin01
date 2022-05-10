import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpoPremiumComponent } from './corpo-premium.component';

describe('CorpoPremiumComponent', () => {
  let component: CorpoPremiumComponent;
  let fixture: ComponentFixture<CorpoPremiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorpoPremiumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorpoPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
