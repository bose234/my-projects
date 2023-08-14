import { Component, ElementRef, QueryList, ViewChildren, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import * as Docxtemplater from 'docxtemplater';
import { saveAs } from 'file-saver';





interface Answer {
  assessmentTitle: string;
  assessmentDescription: string;
  assessmentMarks: number;
  assessmentdueDate: number;

  selectedFile: string | null;
  mark: number | null;
}

@Component({
  selector: 'app-viewsubmission',
  templateUrl: './viewsubmission.component.html',
  styleUrls: ['./viewsubmission.component.css']
})
export class ViewsubmissionComponent {
  title!: string;
  marks!: number;
  dueDate!: number;
  answers: Answer[] = [];

  @ViewChildren('markInput') markInputs!: QueryList<ElementRef>;

  showModal = false;
  pdfUrl = '../assets/Resume (1).pdf';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.title = params['title'];
      this.marks = params['marks'];
      this.dueDate = params['dueDate'];
    });

    const storedAnswers = localStorage.getItem('answers');
    if (storedAnswers) {
      this.answers = JSON.parse(storedAnswers);
    }
  }

  submit() {
    this.markInputs.forEach((input, index) => {
      const markValue = (input.nativeElement as HTMLInputElement).value;
      this.answers[index].mark = Number(markValue);
    });

    localStorage.setItem('answers', JSON.stringify(this.answers));
    this.router.navigate(['/']);
  }

  openModal(pdfUrl: string) {
    this.pdfUrl = pdfUrl;
    this.showModal = true;
    window.open(pdfUrl)
  }

  closeModal() {
    this.showModal = false;
  }
  openModal1(){
    window.open('../assets/Resume (1).pdf')
  }


  download() {
    const tableData = this.getTableData();
    const doc = this.generateWordDocument(tableData);
    const blob = new Blob([doc], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });

    saveAs(blob, 'table_data.docx');
  }

  getTableData() {
    
    return this.answers;
  }

  generateWordDocument(data:any) {
    // Generate the Word document content based on your table data
    let doc = '';
        return doc;
  }
}


