import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewcartComponent } from './viewcart/viewcart.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SelectedItemsComponent } from './selected-items/selected-items.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from './auth.guard';
import { RoleSelectionComponent } from './role-selection/role-selection.component';
import { Userlogin1Component } from './userlogin1/userlogin1.component';





const routes: Routes = [
  { path: '', component: RoleSelectionComponent},
 { path: 'viewproduct', component: ViewproductComponent ,canActivate: [AuthGuard]},
  { path: 'viewcart', component: ViewcartComponent,canActivate: [AuthGuard]},
  { path: 'productdetails/:id', component:ProductDetailsComponent,canActivate: [AuthGuard]},
  { path: 'selecteditems', component:SelectedItemsComponent,canActivate: [AuthGuard] },
  
  { path:'userlogin',component:Userlogin1Component},
  { path: '**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
