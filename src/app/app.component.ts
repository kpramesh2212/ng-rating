import { Component } from '@angular/core';
import {ConfigService} from './config.service';
import {Level, Logger} from 'angular2-logger/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private _cs: ConfigService, private _log: Logger) {
    this.enableLogging();
  }

  private enableLogging() {
    const level = this._cs.get('logLevel');
    if (level) {
      this._log.level = level;
    } else {
      console.error('Unable to find logLevel property');
      console.log('check if app.config.json has been defined in assets/config');
    }
  }
}
