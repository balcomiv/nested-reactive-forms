import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkAllAsTouchedComponent } from './mark-all-as-touched.component';

describe('MarkAllAsTouchedComponent', () => {
  let component: MarkAllAsTouchedComponent;
  let fixture: ComponentFixture<MarkAllAsTouchedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkAllAsTouchedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkAllAsTouchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
