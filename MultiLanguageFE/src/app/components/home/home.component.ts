import { Component, OnInit } from '@angular/core';
import {NewsApiService} from 'angular-news-api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private newsApiService: NewsApiService) {}
  ngOnInit() {

    this.topHeadlines();

  }
  topHeadlines() {
    this.newsApiService.topHeadlines({
      sources: 'bbc-news'
    }).subscribe(data => console.log(data));
  }




}
