import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtelaatAmaryComponent } from './etelaat-amary.component';

describe('EtelaatAmaryComponent', () => {
  let component: EtelaatAmaryComponent;
  let fixture: ComponentFixture<EtelaatAmaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtelaatAmaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtelaatAmaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
