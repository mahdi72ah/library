import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowChildRowEtelaatDarkhasthaComponent } from './show-child-row-etelaat-darkhastha.component';

describe('ShowChildRowEtelaatDarkhasthaComponent', () => {
  let component: ShowChildRowEtelaatDarkhasthaComponent;
  let fixture: ComponentFixture<ShowChildRowEtelaatDarkhasthaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowChildRowEtelaatDarkhasthaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowChildRowEtelaatDarkhasthaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
