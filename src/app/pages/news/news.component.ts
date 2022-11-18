import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { NewsService } from './news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {


  backgroundNewsImage = 'https://www.cbnits.com/8f51d32f18bdc755f747d8daacff1659.jpg'
  headerNewsTitle = 'News';
  headerNewsParaOne = 'Leading the path of innovation!';
  headerNewsLanguageArray: any = [];
  arrayNews: any = [];


  constructor(private router: Router, private titleService: Title, private meta: Meta, private service: NewsService) { }

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.titleService.setTitle("CBNITS")
    this.getHeaderData();
    this.getNewsAllData();
  }

  //Banner languages data
  getHeaderData() {
    this.service.getBannerLanguagesData().subscribe((result: any) => {
      this.headerNewsLanguageArray = result.data.reverse();
    })
  }

  //News all Data
  getNewsAllData() {
    this.service.getNewsAllData().subscribe((result: any) => {
      this.arrayNews = result.data;
      console.log("News All DATA", this.arrayNews);
    })
  }
}
