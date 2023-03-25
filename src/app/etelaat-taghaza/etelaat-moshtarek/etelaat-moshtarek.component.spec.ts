import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtelaatMoshtarekComponent } from './etelaat-moshtarek.component';

describe('EtelaatMoshtarekComponent', () => {
  let component: EtelaatMoshtarekComponent;
  let fixture: ComponentFixture<EtelaatMoshtarekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtelaatMoshtarekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtelaatMoshtarekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
