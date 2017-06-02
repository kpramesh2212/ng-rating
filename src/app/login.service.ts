import {Injectable} from '@angular/core';
import {Logger} from 'angular2-logger/core';
import {PropertyService} from './properties.service';
import {Http, Headers} from '@angular/http';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class LoginService {
  private _loggedIn = false;
  private loginAnnouncedSource = new Subject<boolean>();
  loginAnnounced = this.loginAnnouncedSource.asObservable();

  constructor(private _ps: PropertyService, private _logger: Logger, private _http: Http) {
  }

  public doLogin(email: string, password: string) {
    const headers: Headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(email + ':' + password));
    headers.append('content-type', 'application/json');
    this._ps.headers = headers;
    this._ps.loggedUser = email;
    return this._http.get(this.getBaseUrl(), { headers: headers });
  }

  public get isLoggedIn() {
    return this._loggedIn;
  }

  public set isLoggedIn(isLoggedIn: boolean) {
    this._loggedIn = isLoggedIn;
    this.loginAnnouncedSource.next(this._loggedIn);
  }

  private getBaseUrl() {
    return 'http://' + this._ps.backendHost + ':' + this._ps.backendPort + '/projects';
  }
}
