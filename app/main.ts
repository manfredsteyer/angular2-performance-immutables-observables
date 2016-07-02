import {enableProdMode} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {provideForms, disableDeprecatedForms} from '@angular/forms';
import {APP_ROUTES} from './app.routes';
import {provideRouter} from '@angular/router';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import { APP_PROVIDERS} from './app.providers';

// enableProdMode();

var providers = [
  disableDeprecatedForms(),
  provideForms(),
  provideRouter(APP_ROUTES),
  HTTP_PROVIDERS
];

bootstrap(AppComponent, providers);


