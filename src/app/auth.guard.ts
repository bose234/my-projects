import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const requiredRoles = next.data['roles'] as string[]; // Retrieve the required roles from the route data

    const token = localStorage.getItem('jwt1');

    if (token) {
      const decodedToken = this.decodeJwtToken(token);

      if (decodedToken && decodedToken.role && requiredRoles.includes(decodedToken.role)) {
        return true; // User has one of the required roles, allow access
      }
    }

    // User doesn't have the required role or is not logged in, redirect to login or show an error message
    this.router.navigate(['']);
    return false;
  }

  decodeJwtToken(token: string): any {
    const tokenPayload = token.split('.')[1];
    const decodedPayload = atob(tokenPayload);
    return JSON.parse(decodedPayload);
  }
}
