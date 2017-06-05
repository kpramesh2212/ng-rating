import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {NavBarComponent} from './navbar.component';
import {HomeComponent} from './home.component';
import {ProjectComponent} from './project.component';
import {ProductComponent} from './product.component';
import {CriterionComponent} from './criterion.component';
import {RootRoute} from './app.routing';
import {ConfigService} from './config.service';
import {ConfigLoader} from './configloader';
import {ProjectService} from './project.service';
import {Logger} from 'angular2-logger/core';
import {LoginComponent} from './login.component';
import {PropertyService} from './properties.service';
import {LoginService} from './login.service';
import {AuthGuard} from './auth-guard.service';
import {LinkDisabledDirective} from './linkdisabled.directive';
import {ProjectCUComponent} from './project-cu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ProjectComponent,
    ProjectCUComponent,
    ProductComponent,
    CriterionComponent,
    LoginComponent,
    LinkDisabledDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RootRoute
  ],
  providers: [
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: ConfigLoader,
      deps: [ConfigService],
      multi: true
    },
    PropertyService,
    Logger,
    LoginService,
    ProjectService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
