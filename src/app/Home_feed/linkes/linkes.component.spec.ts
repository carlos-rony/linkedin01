import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkesComponent } from './linkes.component';

describe('LinkesComponent', () => {
  let component: LinkesComponent;
  let fixture: ComponentFixture<LinkesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
