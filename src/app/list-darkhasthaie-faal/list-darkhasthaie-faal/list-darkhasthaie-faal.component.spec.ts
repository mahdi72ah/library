import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDarkhasthaieFaalComponent } from './list-darkhasthaie-faal.component';

describe('ListDarkhasthaieFaalComponent', () => {
  let component: ListDarkhasthaieFaalComponent;
  let fixture: ComponentFixture<ListDarkhasthaieFaalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDarkhasthaieFaalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDarkhasthaieFaalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
