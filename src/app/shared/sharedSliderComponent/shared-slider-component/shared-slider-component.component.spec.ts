import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedSliderComponentComponent } from './shared-slider-component.component';

describe('SharedSliderComponentComponent', () => {
  let component: SharedSliderComponentComponent;
  let fixture: ComponentFixture<SharedSliderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedSliderComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedSliderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
