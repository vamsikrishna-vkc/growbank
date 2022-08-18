import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpddisplayComponent } from './impddisplay.component';

describe('ImpddisplayComponent', () => {
  let component: ImpddisplayComponent;
  let fixture: ComponentFixture<ImpddisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpddisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpddisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
