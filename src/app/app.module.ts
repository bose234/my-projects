import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { ViewcartComponent } from './viewcart/viewcart.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SelectedItemsComponent } from './selected-items/selected-items.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { ProductfilterPipe } from './viewproduct/productfilter.pipe';
import { RoleSelectionComponent } from './role-selection/role-selection.component';
import { Userlogin1Component } from './userlogin1/userlogin1.component';




@NgModule({
  declarations: [
    AppComponent,
    ViewproductComponent,
    ViewcartComponent,
    SelectedItemsComponent,
    ProductfilterPipe,
    RoleSelectionComponent,
    Userlogin1Component
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
  ],
  providers: [AuthGuard],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
