import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstClassesComponent } from './first-classes.component';

describe('FirstClassesComponent', () => {
  let component: FirstClassesComponent;
  let fixture: ComponentFixture<FirstClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstClassesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
