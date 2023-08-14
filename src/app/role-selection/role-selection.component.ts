import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-selection',
  templateUrl: './role-selection.component.html',
  styleUrls: ['./role-selection.component.css']
})
export class RoleSelectionComponent {
  constructor(private router: Router) { }
  admin(){
    this.router.navigate(['/login']);
  }
  user(){
    this.router.navigate(['/userlogin']);
  }

}
