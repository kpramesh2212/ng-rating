import {Component, OnInit} from '@angular/core';
import {ProjectService} from './project.service';
import {Logger} from 'angular2-logger/core';
import {Observable} from 'rxjs/Rx';

@Component({
  templateUrl: './project.component.html'
})
export class ProjectComponent implements OnInit {
  projects = [];
  constructor(private _ps: ProjectService, private _ls: Logger) {}
  ngOnInit() {
      Observable.forkJoin(
      this._ps.getProjects(),
      this._ps.getProjects(true)
    ).flatMap(x => x)
        .reduce((x, y) => x.concat(y))
        .flatMap(x => x)
        .distinct((p: Project) => p.id)
        .toArray()
     .subscribe( x => {
       this._ls.debug('Projects');
       this._ls.debug(x);
       this.projects = x;
    });
  }
}

interface Project {
  id: number;
  admin: string;
  name: string;
}
