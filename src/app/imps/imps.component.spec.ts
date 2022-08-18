import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IMPSComponent } from './imps.component';

describe('IMPSComponent', () => {
  let component: IMPSComponent;
  let fixture: ComponentFixture<IMPSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IMPSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IMPSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
