import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateassessmentComponent } from './createassessment/createassessment.component';
import { ViewassessmentComponent } from './viewassessment/viewassessment.component';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { AnswerComponent } from './answer/answer.component';
import { ViewsubmissionComponent } from './viewsubmission/viewsubmission.component';
import { AuthGuard } from './auth.guard';
import { ResultComponent } from './result/result.component';





const routes: Routes = [
  { path: '', component: LoginComponent},
{ path: 'create', component: CreateassessmentComponent,canActivate: [AuthGuard], data: { roles: ['staff'] }},
   { path: 'viewassessment', component:ViewassessmentComponent,canActivate: [AuthGuard], data: { roles: ['staff','student']} },
   { path: 'answer', component:AnswerComponent,canActivate: [AuthGuard], data: { roles: ['staff','student'] } },
   { path: 'viewsubmission', component:ViewsubmissionComponent ,canActivate: [AuthGuard], data: { roles: ['staff'] }},
   { path: 'result', component:ResultComponent}

   
];

@NgModule({
    imports: [RouterModule.forRoot(routes),CommonModule],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }