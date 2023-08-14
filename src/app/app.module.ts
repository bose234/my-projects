import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateassessmentComponent } from './createassessment/createassessment.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing .module';
import { CommonModule } from '@angular/common';
import { ViewassessmentComponent } from './viewassessment/viewassessment.component';

import { LoginComponent } from './login/login.component';
import { AnswerComponent } from './answer/answer.component';
import { ViewsubmissionComponent } from './viewsubmission/viewsubmission.component';
import { AuthGuard } from './auth.guard';
import { ResultComponent } from './result/result.component';
import {  PdfViewerComponent, PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';




@NgModule({
  declarations: [
    AppComponent,
    CreateassessmentComponent,
    ViewassessmentComponent,
    AnswerComponent,
    LoginComponent,
    ViewsubmissionComponent,
    ResultComponent
  
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    PdfViewerModule,
    NgxExtendedPdfViewerModule,
    
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
