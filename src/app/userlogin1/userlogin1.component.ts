import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin1',
  templateUrl: './userlogin1.component.html',
  styleUrls: ['./userlogin1.component.css']
})
export class Userlogin1Component {
  username!: string;
  password!: string;

  constructor(private router: Router) { }

  login() {
    const userCredentials = [
      { username: 'user', password: '2352', role: 'user' },
      { username: 'admin', password: '2352', role: 'admin' }
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

      if (matchedUser) {
        
  
        if (matchedUser.role === 'user') {
          this.router.navigate(['/viewproduct'], { queryParams: { role: 'user' } });
        } else if (matchedUser.role === 'admin') {
          this.router.navigate(['/selecteditems'], { queryParams: { role: 'admin' } });
        }
      } else {
        alert('Invalid username or password');
      }
    }
    
  }

  generateJwtToken(payload: any): string {
    const tokenHeader = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
    const tokenPayload = btoa(JSON.stringify(payload));
    const tokenSignature = 'dummySignature';

    const token = `${tokenHeader}.${tokenPayload}.${tokenSignature}`;
    return token;
  }
}
