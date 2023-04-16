import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MohasebatarkhastComponent } from './mohasebatarkhast.component';

describe('MohasebatarkhastComponent', () => {
  let component: MohasebatarkhastComponent;
  let fixture: ComponentFixture<MohasebatarkhastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MohasebatarkhastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MohasebatarkhastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
