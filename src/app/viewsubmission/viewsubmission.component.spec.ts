import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsubmissionComponent } from './viewsubmission.component';

describe('ViewsubmissionComponent', () => {
  let component: ViewsubmissionComponent;
  let fixture: ComponentFixture<ViewsubmissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewsubmissionComponent]
    });
    fixture = TestBed.createComponent(ViewsubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
