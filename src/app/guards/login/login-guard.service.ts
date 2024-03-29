import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate{

constructor(
  private router: Router
) { }
  canActivate(){
    if (localStorage.getItem('user') ){
      return false;
    }else {
      return true;
    }
  }

}
