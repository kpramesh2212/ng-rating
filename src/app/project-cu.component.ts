import {Component} from '@angular/core';
import {Criterion} from './criterion';
import {Product} from "./Product";

@Component({
  templateUrl: './project-cu.component.html',
  styleUrls: ['./project-cu.component.css']
})
export class ProjectCUComponent {
  project: Project;
  constructor() {
    this.project = {
      name: 'CSO Central Statics Project1',
      products : [
        {
          id: 1,
          name: 'Product1'
        },
        {
          id: 2,
          name: 'Product2'
        },
      ],
      criteria: [
        {
          id: 1,
          name: 'Quality',
          weight: 10
        },
        {
          id: 1,
          name: 'Control',
          weight: 20
        }
      ]
    };
  }

  onSubmit(form) {
    console.log(form.value);
  }
}
interface Project {
  id?: number;
  name: string;
  products?: Product[];
  criteria?: Criterion[];
}



