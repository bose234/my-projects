import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'routing-exercise';
  role: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.resetCart();
    const tokenFromLocalStorage = localStorage.getItem('jwt1');

    if (tokenFromLocalStorage) {
      const decodedToken = jwtDecode(tokenFromLocalStorage) as { role: string };
      if (decodedToken) {
        this.role = decodedToken.role;
        if (this.role === 'user') {
          this.role = 'user';
        } else if (this.role === 'admin') {
          this.role = 'admin';
        }
      }
    }
  }
 

  resetCart() {
    localStorage.clear();
  }
}
