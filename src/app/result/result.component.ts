import { Component,OnInit } from '@angular/core';
interface Answer {
  assessmentTitle: string;
  assessmentDescription: string;
  assessmentMarks: number;
  assessmentdueDate: number;
  selectedFile: string | null;
  mark: number | null;
}

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  results: Answer[] = [];

  constructor() { }

  ngOnInit() {
    const storedResults = localStorage.getItem('results');
    if (storedResults) {
      this.results = JSON.parse(storedResults);
    }
  }
}
