import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDarkhasthaieFaalComponentMainComponent } from './list-darkhasthaie-faal-main.component';

describe('ListDarkhasthaieFaalComponentMainComponent', () => {
  let component: ListDarkhasthaieFaalComponentMainComponent;
  let fixture: ComponentFixture<ListDarkhasthaieFaalComponentMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDarkhasthaieFaalComponentMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDarkhasthaieFaalComponentMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
