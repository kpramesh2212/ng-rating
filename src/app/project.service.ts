import {Injectable} from '@angular/core';
import {Logger} from 'angular2-logger/core';
import {Http, URLSearchParams} from '@angular/http';
import {PropertyService} from './properties.service';

@Injectable()
export class ProjectService {

  constructor(private _logger: Logger, private _http: Http, private _ps: PropertyService) {
  }

  getProjects(admin ?: boolean) {
    const url = this.getBaseUrl();
    this._logger.debug('Get project url ' + url);
    if (admin) {
      const params = new URLSearchParams();
      params.set('admin', 'true');
      this._logger.debug('Setting url params ' + params);
      return this._http.get(this.getBaseUrl(), { headers: this._ps.headers, search: params }).map(res => res.json());
    }
    return this._http.get(this.getBaseUrl(), { headers: this._ps.headers }).map(res => res.json());
  }

  private getBaseUrl() {
    return 'http://' + this._ps.backendHost + ':' + this._ps.backendPort + '/projects';
  }
}
