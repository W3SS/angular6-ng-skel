import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { PathLocationStrategy } from '@angular/common';
import { routes } from './routes/app-routes';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { SettingsService } from './services/settings.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { Main }                       from './pages/main/main';
import { Page1 }                      from './pages/page1/page1';
import { Page2 }                      from './pages/page2/page2';
import { Subpage1 }                   from './pages/subpage1/subpage1';
import { Subpage2 }                   from './pages/subpage2/subpage2';

import { TranslateModule }          from '@ngx-translate/core';

@NgModule({
  declarations: [
    AppComponent,
    Main,
    Page1,
    Page2,
    Subpage1,
    Subpage2
  ],
  imports: [
    BrowserModule,
    routes,
    NgbModule.forRoot(),
    FormsModule,
    HttpModule, 
    JsonpModule,
    TranslateModule.forRoot()
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    SettingsService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
