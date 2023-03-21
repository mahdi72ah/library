import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtelaatDarkhasthaComponent } from './etelaat-darkhastha.component';

describe('EtelaatDarkhasthaComponent', () => {
  let component: EtelaatDarkhasthaComponent;
  let fixture: ComponentFixture<EtelaatDarkhasthaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtelaatDarkhasthaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtelaatDarkhasthaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
