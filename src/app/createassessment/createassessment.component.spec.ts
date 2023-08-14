import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CreateassessmentComponent } from './createassessment.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

describe('CreateassessmentComponent', () => {
  let component: CreateassessmentComponent;
  let fixture: ComponentFixture<CreateassessmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,FormsModule,ReactiveFormsModule], 
      declarations: [CreateassessmentComponent]
    });
    fixture = TestBed.createComponent(CreateassessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    
  });
});
