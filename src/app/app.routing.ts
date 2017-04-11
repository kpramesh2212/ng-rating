import {RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
import {ProjectComponent} from './project.component';
import {ProductComponent} from './product.component';
import {CriterionComponent} from './criterion.component';

export const RootRoute = RouterModule.forRoot([
  {path: '', component: HomeComponent},
  {path: 'projects', component: ProjectComponent },
  {path: 'apps', component: ProductComponent },
  {path: 'criteria', component: CriterionComponent },
  {path: '**', redirectTo: '/'}
]);
