import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createassessment',
  templateUrl: './createassessment.component.html',
  styleUrls: ['./createassessment.component.css']
})
export class CreateassessmentComponent {
  title!: string;
  description!: string;
  dueDate!: string;
  marks!: number;

  constructor(private http: HttpClient,private router:Router) {}

  addAssessment() {
    const assessment = {
      title: this.title,
      description: this.description,
      dueDate: this.dueDate,
      marks: this.marks
    };

    this.http.post('http://localhost:3000/posts', assessment)
      .subscribe(() => {
        alert('Assessment added successfully.');
        
        
        this.title = '';
        this.description = '';
        this.dueDate = '';
        this.marks = 0;
        this.router.navigate(['/viewassessment'])
      });
  }
}
