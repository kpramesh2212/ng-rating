import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import {ConfigService} from './config.service';
import {Logger} from 'angular2-logger/core';
import {Http} from '@angular/http';


@Injectable()
export class ProjectService {
  private _host;
  private _port;

  constructor(private _cs: ConfigService, private _logger: Logger, private _http: Http) {
    this.loadHostAndPort();
  }

  getProjects() {
    const url = this.getBaseUrl();
    this._logger.debug('Entering Get projects');
    this._logger.debug('Get project url ' + url);
    return this._http.get(this.getBaseUrl()).map(res => res.json());
  }

  private loadHostAndPort() {
    this._host = this._cs.get('backendHost');
    this._port = this._cs.get('backendPort');
    if (!this._host || !this._port) {
      this._logger.error('Unable to find property backendHost and backendPort in' +
        ' assets/config/app.config.json');
    }
    this._logger.info('backendHost ' + this._host);
    this._logger.info('backendPort ' + this._port);
  }

  private getBaseUrl() {
    return 'http://' + this._host + ':' + this._port + '/projects';
  }
}
