import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formtemplate';
  formdata={
    username:'',
    gmail:'',
    password:'',
    mobile:'',
    address:'',
    link:'',
    gender:'',
    course:'',
    captchavalue:'',
    confirmpassword:''
    
  }
captchavalue:any;
confirmpassword:any;
 
  courseoptions: string[] = ['BCA', 'MCA', 'BSc.CS', 'IT'];
  
  
  
  submitform(form: NgForm) {
   
      console.log(this.formdata.username);
      console.log(this.formdata.gmail);
      console.log(this.formdata.mobile);
      console.log(this.formdata.address);
      console.log(this.formdata.link);
      console.log(this.formdata.gender);
      console.log(this.formdata.course);

     
    
   
    }
    
    
}

