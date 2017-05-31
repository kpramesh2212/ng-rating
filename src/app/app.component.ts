import {Component, OnInit} from '@angular/core';
import {Logger} from 'angular2-logger/core';
import {PropertyService} from './properties.service';
import {LoginService} from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  loggedIn;

  constructor(private _ps: PropertyService, private _ls: LoginService, private _log: Logger) {
  }

  ngOnInit(): void {
    this._ls.loginAnnounced.subscribe(login => this.loggedIn = login);
  }
}
