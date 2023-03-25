import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateghazieDarkhastComponent } from './mateghazie-darkhast.component';

describe('MateghazieDarkhastComponent', () => {
  let component: MateghazieDarkhastComponent;
  let fixture: ComponentFixture<MateghazieDarkhastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateghazieDarkhastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MateghazieDarkhastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
