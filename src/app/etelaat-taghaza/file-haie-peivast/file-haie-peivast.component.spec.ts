import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileHaiePeivastComponent } from './file-haie-peivast.component';

describe('FileHaiePeivastComponent', () => {
  let component: FileHaiePeivastComponent;
  let fixture: ComponentFixture<FileHaiePeivastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileHaiePeivastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileHaiePeivastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
