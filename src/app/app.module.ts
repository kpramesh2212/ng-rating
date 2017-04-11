import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ProjectComponent,
    ProductComponent,
    CriterionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
