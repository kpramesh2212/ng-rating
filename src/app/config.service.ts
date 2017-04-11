import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ConfigService {
  private config: { [key: string]: string|number} = {};
  constructor(private _http: Http) {
  }
  public load(url: string) {
    return new Promise((resolve) => {
      this._http.get(url)
          .map(res => res.json())
          .subscribe(config => {
            this.config = config;
            resolve();
          });
    });
  }
  public get(key: string) {
    return this.config[key];
  }
}
