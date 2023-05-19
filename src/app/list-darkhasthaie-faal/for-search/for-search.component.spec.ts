import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForSearchComponent } from './for-search.component';

describe('ForSearchComponent', () => {
  let component: ForSearchComponent;
  let fixture: ComponentFixture<ForSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
