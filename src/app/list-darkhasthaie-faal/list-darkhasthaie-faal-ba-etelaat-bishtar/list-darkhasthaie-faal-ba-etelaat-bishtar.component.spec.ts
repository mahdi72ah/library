import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDarkhasthaieFaalBaEtelaatBishtarComponent } from './list-darkhasthaie-faal-ba-etelaat-bishtar.component';

describe('ListDarkhasthaieFaalBaEtelaatBishtarComponent', () => {
  let component: ListDarkhasthaieFaalBaEtelaatBishtarComponent;
  let fixture: ComponentFixture<ListDarkhasthaieFaalBaEtelaatBishtarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDarkhasthaieFaalBaEtelaatBishtarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDarkhasthaieFaalBaEtelaatBishtarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
