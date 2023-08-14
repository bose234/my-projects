import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

interface Answer {
  assessmentTitle: string;
  assessmentDescription: string;
  assessmentMarks: number;
  assessmentdueDate: number;
  selectedFile: string | null;
}


@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent {
  assessmentTitle!: string;
  assessmentDescription!: string;
  assessmentMarks!: number;
  assessmentdueDate!: number;
  selectedFile!: File | null;
  isStaff!: boolean;

  constructor(private route: ActivatedRoute, private router: Router) {
    const token = localStorage.getItem('jwt1');
    if (token) {
      const decodedToken = this.decodeJwtToken(token);
      this.isStaff = decodedToken.role === 'staff';
    }
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.assessmentTitle = params['title'];
      this.assessmentDescription = params['description'];
      this.assessmentMarks = params['marks'];
      this.assessmentdueDate = params['dueDate'];
    });
  }

  submit() {
    const answer: Answer = {
      assessmentTitle: this.assessmentTitle,
      assessmentMarks: this.assessmentMarks,
      assessmentDescription: this.assessmentDescription,
      assessmentdueDate: this.assessmentdueDate,
      selectedFile: null
    };
  
    // Convert the selected file to a base64 string
    if (this.selectedFile) {
      this.convertFileToBase64(this.selectedFile, (base64String) => {
        answer.selectedFile = base64String;
  
        // Get the existing answers from local storage
        const storedAnswers = localStorage.getItem('answers');
        let answers: Answer[] = [];
        if (storedAnswers) {
          answers = JSON.parse(storedAnswers);
        }
  
        // Add the current answer to the answers array
        answers.push(answer);
  
        // Store the updated answers array in local storage
        localStorage.setItem('answers', JSON.stringify(answers));
        alert("uploaded successfully")
      });
    }
  
    // Clear the form fields and selected file
    // this.assessmentTitle = '';
    // this.assessmentMarks = 0;
    // this.assessmentdueDate = 0;
    // this.selectedFile = null;
  }

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFile = inputElement.files[0];
    } else {
      this.selectedFile = null;
    }
  }

  view() {
    this.router.navigate(['/viewsubmission']);
  }

  private decodeJwtToken(token: string): any {
    const tokenPayload = token.split('.')[1];
    const decodedPayload = atob(tokenPayload);
    return JSON.parse(decodedPayload);
  }

  private convertFileToBase64(file: File, callback: (base64String: string) => void) {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      callback(base64String);
    };
    reader.readAsDataURL(file);
  }

  logout() {
    this.router.navigate(['']);
  }
}
