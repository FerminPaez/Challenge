import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { ResponseLogin } from './entities/response-login';
import { LoginService } from './services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup = new FormGroup({
    email : new FormControl(''),
    password : new FormControl('')
  });

  constructor(
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
  }

  login(event){
    event.preventDefault();
    console.log(this.formLogin.value);
    this.loginService.login(this.formLogin.value).subscribe(
      e => {
        console.log(e);
        const response = e;
        sessionStorage.setItem( 'token', response.token);
        localStorage.setItem('user_name', response.user.name );
        localStorage.setItem('user_email', response.user.email );
        localStorage.setItem('user_role', response.user.role);
        localStorage.setItem('uid', response.user.uid);
        this.router.navigateByUrl('/home');
      }
    );
  }
}
