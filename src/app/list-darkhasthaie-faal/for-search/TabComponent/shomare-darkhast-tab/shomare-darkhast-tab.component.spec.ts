import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShomareDarkhastTabComponent } from './shomare-darkhast-tab.component';

describe('ShomareDarkhastTabComponent', () => {
  let component: ShomareDarkhastTabComponent;
  let fixture: ComponentFixture<ShomareDarkhastTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShomareDarkhastTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShomareDarkhastTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
