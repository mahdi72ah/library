import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TafsilTableComponent } from './tafsil-table.component';

describe('TafsilTableComponent', () => {
  let component: TafsilTableComponent;
  let fixture: ComponentFixture<TafsilTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TafsilTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TafsilTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
