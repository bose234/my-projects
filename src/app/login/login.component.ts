import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor(private router: Router) { }

  login() {
    const userCredentials = [
      { username: 'staff', password: '2352', role: 'staff' },
      { username: 'student', password: '2352', role: 'student' }
    ];

    const matchedUser = userCredentials.find(
      user => user.username === this.username && user.password === this.password
    );

    if (matchedUser) {
      console.log('Login successful');

      const tokenPayload = {
        username: this.username,
        password: this.password,
        role: matchedUser.role
      };

      const token = this.generateJwtToken(tokenPayload);
      localStorage.setItem('jwt1', token);

      if (matchedUser.role === 'staff') {
        this.router.navigate(['/create']);
      } else if (matchedUser.role === 'student') {
        this.router.navigate(['/viewassessment']);
      }
    } else {
      alert('Invalid username or password');
    }
  }

  generateJwtToken(payload: any):any {
    const tokenHeader = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
    const tokenPayload = btoa(JSON.stringify(payload));
    const tokenSignature = 'dummySignature';

    const token = `${tokenHeader}.${tokenPayload}.${tokenSignature}`;
    return token;
  }
}
