import {Injectable} from '@angular/core';
import {Logger} from 'angular2-logger/core';
import {Http} from '@angular/http';
import {PropertyService} from './properties.service';

@Injectable()
export class ProjectService {

  constructor(private _logger: Logger, private _http: Http, private _ps: PropertyService) {
  }

  getProjects() {
    const url = this.getBaseUrl();
    this._logger.debug('Get project url ' + url);
    return this._http.get(this.getBaseUrl(), { headers: this._ps.headers }).map(res => res.json());
  }

  private getBaseUrl() {
    return 'http://' + this._ps.backendHost + ':' + this._ps.backendPort + '/projects';
  }
}
