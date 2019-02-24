import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {AppMaterialModule} from './modules/app-material.model';
import { HomeComponent } from './components/home/home.component';
import { VisaServicesComponent } from './components/visa-services/visa-services.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { NgnewsModule } from 'angular-news-api';
import { NewsApiKeyConfig } from 'angular-news-api';

const newsApiConfig: NewsApiKeyConfig = {
  key: '1a9c3ffc5fd84e99a02bae4573b28cd9'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    VisaServicesComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMaterialModule,
    NgnewsModule.forRoot(newsApiConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
