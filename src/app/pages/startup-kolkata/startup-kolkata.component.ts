import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { StartupKolkataService } from './startup-kolkata.service';

@Component({
  selector: 'app-startup-kolkata',
  templateUrl: './startup-kolkata.component.html',
  styleUrls: ['./startup-kolkata.component.css']
})
export class StartupKolkataComponent implements OnInit {
  backgroundStartupKolkataImage = 'https://www.cbnits.com/8f51d32f18bdc755f747d8daacff1659.jpg'
  headerStartupKolkataTitle = 'News';
  headerStartupKolkataParaOne = 'Leading the path of innovation!';
  headerStartupKolkataLanguageArray: any = []
  NewsStartupKolkataById: any = [];

  array = [{
    artical: "36 Successful Startups in Kolkata | List of Kolkata Startups",
    author: "Author: Naveen Bachkethi, Forbes Councils Member, Forbes Technology Council Technical Advisor, CBNITS",

  }]

  constructor(private titleService: Title, private service: StartupKolkataService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
     document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.titleService.setTitle('CBNITS')
    this.getHeaderData();
    this.getNewsByIdData();
  }
  //StartupKolkata Banner  languages data
  getHeaderData() {
    this.service.getBannerLanguagesData().subscribe((result: any) => {
      this.headerStartupKolkataLanguageArray = result.data.reverse();
    })
  }
  //get StartupKolkata ById languages data
  getNewsByIdData() {
    this.service.getNewsByIdData().subscribe((result: any) => {
      this.NewsStartupKolkataById = result.data;
      this.NewsStartupKolkataById.newsContent = this.sanitizer.bypassSecurityTrustHtml(this.NewsStartupKolkataById.newsContent)
    })

  }
}
