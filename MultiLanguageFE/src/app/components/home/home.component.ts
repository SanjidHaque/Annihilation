import { Component, OnInit } from '@angular/core';
import {NewsApiService} from 'angular-news-api';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls:
    [
      './home.component.css',
      '../../../../node_modules/flag-icon-css/css/flag-icon.css'
    ]
})
export class HomeComponent implements OnInit {

  constructor(private newsApiService: NewsApiService,
              private translate: TranslateService) {}
  ngOnInit() {}

  switchLanguage(language: string) {
    this.translate.use(language);
  }

}
