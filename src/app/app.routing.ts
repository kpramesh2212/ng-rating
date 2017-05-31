import {RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
import {ProjectComponent} from './project.component';
import {ProductComponent} from './product.component';
import {CriterionComponent} from './criterion.component';
import {LoginComponent} from './login.component';
import {AuthGuard} from './auth-guard.service';

export const RootRoute = RouterModule.forRoot([
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent },
  {path: 'projects', component: ProjectComponent, canActivate: [AuthGuard] },
  {path: 'apps', component: ProductComponent, canActivate: [AuthGuard] },
  {path: 'criteria', component: CriterionComponent, canActivate: [AuthGuard] },
  {path: '**', redirectTo: '/'}
]);
