import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesClassesComponent } from './services-classes.component';

describe('ServicesClassesComponent', () => {
  let component: ServicesClassesComponent;
  let fixture: ComponentFixture<ServicesClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesClassesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
