import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { LoginUser } from '../../entities/login-user';
import { ResponseLogin } from '../../entities/response-login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

constructor(private http: HttpClient) { }

  login( objectUser: LoginUser){
    const url = `${environment.ApiRestURL}/auth/login`;
    return this.http.post<ResponseLogin>(url, objectUser).toPromise();
  }
}
