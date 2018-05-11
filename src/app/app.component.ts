import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(translate: TranslateService) {

    translate.setTranslation('en', {
      HELLO: 'hello'
    });
    translate.setTranslation('ru', {
      HELLO: 'Привет'
    });


    translate.setDefaultLang('en');
    translate.use('en');
  }
}
