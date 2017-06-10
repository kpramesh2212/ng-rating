import {Component, Input} from '@angular/core';
import {Criterion} from './criterion';
import * as _ from 'underscore';
import {CustomChangeEvent} from './CustomChangeEvent';

@Component({
  selector: 'app-criteria',
  templateUrl: './criterion.component.html'
})
export class CriterionComponent {
  @Input() criteria: Criterion[] = [];
  criterionNames = _.pluck(this.criteria, 'name');

  constructor() {}

  whenCriterionChange(event: CustomChangeEvent) {
    if (event.type === 'new') {
      this.criteria.push(event.value);
    } else {
      // An update event
      const cri = _.without(this.criteria, _.findWhere(this.criteria, {name: event.name}));
      cri.push(event.value);
      this.criteria = cri;
    }
    this.criterionNames = _.pluck(this.criteria, 'name');
  }

  onDelete(c: Criterion) {
    this.criteria = _.without(this.criteria, _.findWhere(this.criteria, c));
    this.criterionNames = _.pluck(this.criteria, 'name');
  }
}

