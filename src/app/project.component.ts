import {Component, OnInit} from '@angular/core';
import {ProjectService} from './project.service';
import {Logger} from 'angular2-logger/core';
import {Observable} from 'rxjs/Rx';
import {PropertyService} from './properties.service';
import * as _ from 'underscore';


@Component({
  templateUrl: './project.component.html'
})
export class ProjectComponent implements OnInit {
  projects = [];
  loggedUser;

  constructor(private _ps: ProjectService, private _ls: Logger, private _pos: PropertyService) {
  }

  ngOnInit() {
    this.loggedUser = this._pos.loggedUser;
             Observable.forkJoin(
      this._ps.getProjects(),
      this._ps.getProjects(true)
    ).flatMap(x => x)
      .reduce((x, y) => x.concat(y))
      .flatMap(x => x)
      .distinct((p: Project) => p.id)
      .toArray()
      .subscribe(x => {
        this._ls.debug('Projects');
        this._ls.debug(x);
        this.projects = x;
      });
  }

  isRaterContainsLoggedInUser(raters: [{email: string}]) {
    if (_.findWhere(raters, {'email': this.loggedUser})) {
      return true;
    }
    return false;
  }

}

interface Project {
  id: number;
  admin: string;
  name: string;
}

