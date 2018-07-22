import { Injectable }           from '@angular/core';
import { Router, CanActivate }  from '@angular/router';
import { LoginService }         from '../services/login/login.service';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(
    private router: Router, 
    private loginService : LoginService) {}

  canActivate(): boolean {
    if (this.loginService.getToken()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
