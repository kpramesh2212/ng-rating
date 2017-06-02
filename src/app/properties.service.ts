import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {environment} from '../environments/environment';
import {Logger} from 'angular2-logger/core';

@Injectable()
export class PropertyService {
  private properties: Map<string, string | number> = null;
  public backendHost: string;
  public backendPort: number;
  public logLevel: number;
  public headers: Headers;
  public loggedUser: string;

  constructor(private _http: Http, private _logger: Logger) {
    console.log('Loading properties from ' + environment.configFile);
    this.loadProperties(environment.configFile);
  }

  private loadProperties(url) {
    this._http.get(url)
      .map(res => res.json())
      .subscribe(properties => {
          this.properties = properties;
          console.log('Setting Individual Properties');
          this.setProperties();
        },
        error => {
          console.error('Unable to load properties from url ' + url);
          console.error(error);
        });
  }

  private setProperties() {
    this.logLevel = <number> this.properties['logLevel'];
    if (!this.logLevel) {
      console.log('ERROR: No property found by name logLevel. Setting default value WARN');
      this.logLevel = 2;
    }
    this._logger.level = this.logLevel;
    this._logger.debug('Log Level  = ' + this.logLevel);
    this.backendHost = <string> this.getProperty('backendHost');
    this._logger.debug('Backend host = ' + this.backendHost);
    this.backendPort = <number> this.getProperty('backendPort');
    this._logger.debug('Setting backend host = ' + this.backendPort);
  }

  private getProperty(propertyName: string) {
    const property = this.properties[propertyName];
    if (!property) {
      this._logger.error('Error: No such property ' + propertyName);
      this._logger.error('Check if app.config.json has been defined in assets/config and if it has ' + propertyName + ' defined');
    }
    return property;
  }

}
