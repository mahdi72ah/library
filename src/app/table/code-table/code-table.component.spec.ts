import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeTableComponent } from './code-table.component';

describe('CodeTableComponent', () => {
  let component: CodeTableComponent;
  let fixture: ComponentFixture<CodeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
