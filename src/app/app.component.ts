import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule} from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="reactiveform";
  courses: string[] = ['MCA', 'BCA', 'CS'];
  captcha:any;
  password='';
  
contactform = new FormGroup({
      username: new FormControl('', [Validators.required,Validators.minLength(7),Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,}$/)]),
      gmail: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9._%+-]+@gmail.com$')]),
      password: new FormControl('', [Validators.required,Validators.minLength(8),Validators.maxLength(15),Validators.pattern('^(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[0-9]).{8,15}$')]),
      confirmpassword: new FormControl('',[Validators.required]),
      mobile:new FormControl('',[Validators.required,Validators.pattern('^[0-9]{10}$')]),
      address:new FormControl('',[Validators.required]),
      link:new FormControl('',[Validators.required,Validators.pattern('www.+[a-zA-Z0-9._%+-]+.com$')]),
      gender:new FormControl('',[Validators.required]),
      courses:new FormControl('',[Validators.required]),
      skills:new FormControl('',[Validators.required]),
      agree:new FormControl('',[Validators.required]),
      captcha:new FormControl(),

    });

   
  
  submitform() {
    console.log(this.contactform.value);
    
}
}



