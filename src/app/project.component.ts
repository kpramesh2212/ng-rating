import {Component, OnInit} from '@angular/core';
import {ProjectService} from './project.service';
import {Logger} from 'angular2-logger/core';

@Component({
  templateUrl: './project.component.html'
})
export class ProjectComponent implements OnInit {
  projects = [];
  constructor(private _ps: ProjectService, private _ls: Logger) {}
  ngOnInit() {
    this._ps.getProjects().subscribe(x => {
      this._ls.debug('setting projects ' + x);
      this.projects = x;
    });
  }
}
