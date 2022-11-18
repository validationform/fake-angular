import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { HomeConnectedService } from './home-connected.service';

@Component({
  selector: 'app-home-connected',
  templateUrl: './home-connected.component.html',
  styleUrls: ['./home-connected.component.css']
})
export class HomeConnectedComponent implements OnInit {

  backgroundHomeConnectedImage = 'https://www.cbnits.com/8f51d32f18bdc755f747d8daacff1659.jpg'
  headerHomeConnectedTitle = 'News';
  headerHomeConnectedParaOne = 'Leading the path of innovation!';
  headerHomeConnectedLanguageArray: any = [];
  homeConnectedById: any = [];

  constructor(private titleService: Title, private service: HomeConnectedService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.titleService.setTitle('CBNITS')
    this.getHeaderData();
    this.getNewsByIdData();
  }

  //home-connected Banner Language data
  getHeaderData() {
    this.service.getBannerLanguagesData().subscribe((result: any) => {
      this.headerHomeConnectedLanguageArray = result.data.reverse();
    })
  }

  //home-connected By Id languages data
  getNewsByIdData() {
    this.service.getNewsByIdData().subscribe((result: any) => {
      this.homeConnectedById = result.data;
      this.homeConnectedById.newsContent = this.sanitizer.bypassSecurityTrustHtml(this.homeConnectedById.newsContent)
    })
  }
}
