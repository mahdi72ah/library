import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaierTabComponent } from './saier-tab.component';

describe('SaierTabComponent', () => {
  let component: SaierTabComponent;
  let fixture: ComponentFixture<SaierTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaierTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaierTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
