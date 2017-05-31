import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from './login.service';
import {Logger} from 'angular2-logger/core';
import {Router} from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(fb: FormBuilder, private _ls: LoginService, private _log: Logger, private _router: Router) {
    this.loginForm = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onSubmit() {
    const email = this.loginForm.controls['email'].value;
    const password = this.loginForm.controls['password'].value;
    this._ls.doLogin(email, password).subscribe(
      success => {
        console.log('success');
        this._ls.isLoggedIn = true;
        this._router.navigate(['']);
      },
      error => {
        this._ls.isLoggedIn = false;
        this._log.error('Login error : ' + error);
        alert('Login Error Invalid username/password');
      }
    );
  }
}
