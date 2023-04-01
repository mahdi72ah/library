import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EghdamatMarbotBeKartablComponent } from './eghdamat-marbot-be-kartabl.component';

describe('EghdamatMarbotBeKartablComponent', () => {
  let component: EghdamatMarbotBeKartablComponent;
  let fixture: ComponentFixture<EghdamatMarbotBeKartablComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EghdamatMarbotBeKartablComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EghdamatMarbotBeKartablComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
