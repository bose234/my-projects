import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Assessment {
  title: string;
  description: string;
  dueDate: string;
  marks: number;
  obtainedMarks: number;
  id: number;
}

@Component({
  selector: 'app-viewassessment',
  templateUrl: './viewassessment.component.html',
  styleUrls: ['./viewassessment.component.css']
})
export class ViewassessmentComponent implements OnInit {
  assessments: Assessment[] = [];
  isStudent: boolean = true;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.fetchAssessments();
    this.checkUserRole();
  }

  fetchAssessments() {
    this.http.get<Assessment[]>('http://localhost:3000/posts')
      .subscribe((assessments) => {
        this.assessments = assessments;
        console.log(assessments);
      });
  }
  checkUserRole() {
    const storedToken = localStorage.getItem('jwt1');

    if (storedToken) {
      const decodedToken = this.decodeJwtToken(storedToken);
      const userRole = decodedToken.role;

      if (userRole === 'staff') {
        this.isStudent = false; // User is not a student
      }
    }
  }

  goToTraineeSubmissionPage(assessment: Assessment) {
    const storedToken = localStorage.getItem('jwt1');

    if (storedToken) {
      const decodedToken = this.decodeJwtToken(storedToken);
      const userRole = decodedToken.role;

      if ( userRole ==='student' || userRole==='staff') {
        this.router.navigate(['/answer'], {
          queryParams: {
            title: assessment.title,
            description: assessment.description,
            marks: assessment.marks,
            dueDate: assessment.dueDate
          }
        });
      } else {
        alert('Invalid role');
      }
    } else {
      alert('Token not found');
    }
  }

  decodeJwtToken(token: string): any {
    const tokenParts = token.split('.');
    if (tokenParts.length === 3) {
      const encodedPayload = tokenParts[1];
      const decodedPayload = atob(encodedPayload);
      return JSON.parse(decodedPayload);
    } else {
      throw new Error('Invalid token');
    }
  }
}
