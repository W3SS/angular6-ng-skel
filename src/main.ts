import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';


//import "./assets/styles/postcss-ex.css";
//import "./assets/styles/style.less";
//import "./assets/styles/styles.scss";
//import "font-awesome-sass-loader";
//import "./assets/styles/c1.less";

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';



if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
