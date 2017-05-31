import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {LoginService} from './login.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _ls: LoginService, private _router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this._ls.isLoggedIn) {
      return true;
    }
    this._router.navigate(['login']);
    return false;
  }
}
