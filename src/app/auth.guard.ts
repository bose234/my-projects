import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem('jwt1');
    if (token) {
      const tokenPayload = this.parseJwtToken(token);
      const userRole = tokenPayload.role;

      if (next.data['roles'] && !next.data['roles'].includes(userRole)) {
        // User does not have the required role to access the route
        return this.router.parseUrl('/unauthorized'); // Change '/unauthorized' to the appropriate route for unauthorized access
      }

      return true;
    }

    // User is not authenticated, redirect to the login page
    return this.router.parseUrl('/userlogin'); // Change '/login' to the actual route of your login page
  }

  parseJwtToken(token: string): any {
    const tokenPayloadBase64 = token.split('.')[1];
    const tokenPayloadJson = atob(tokenPayloadBase64);
    return JSON.parse(tokenPayloadJson);
  }
}
