import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmarVaDarkhasthaComponent } from './amar-va-darkhastha.component';

describe('AmarVaDarkhasthaComponent', () => {
  let component: AmarVaDarkhasthaComponent;
  let fixture: ComponentFixture<AmarVaDarkhasthaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmarVaDarkhasthaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmarVaDarkhasthaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
