import {enableProdMode} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {provideForms, disableDeprecatedForms} from '@angular/forms';
import {provideRouter} from '@angular/router';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from "./app.component";
import {FlugSuchenComponent} from "./flug-suchen/flug-suchen.component";
import {FlugService} from "./services/flug.service";


// enableProdMode();

var providers = [
  { provide: "BASE_URL", useValue: "http://www.angular.at" },
  disableDeprecatedForms(),
  provideForms(),
  HTTP_PROVIDERS
];

bootstrap(FlugSuchenComponent, providers);


