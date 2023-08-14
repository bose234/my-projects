import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup,  Validators } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
        ReactiveFormsModule,FormsModule, BrowserAnimationsModule,AngularMaterialModule
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
