import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtelaatTaghazaComponent } from './etelaat-taghaza.component';

describe('EtelaatTaghazaComponent', () => {
  let component: EtelaatTaghazaComponent;
  let fixture: ComponentFixture<EtelaatTaghazaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtelaatTaghazaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtelaatTaghazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
