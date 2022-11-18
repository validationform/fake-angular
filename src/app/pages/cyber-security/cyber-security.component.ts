import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { CyberSecurityService } from './cyber-security.service';

@Component({
  selector: 'app-cyber-security',
  templateUrl: './cyber-security.component.html',
  styleUrls: ['./cyber-security.component.css']
})
export class CyberSecurityComponent implements OnInit {

  backgroundCyberSecurityImage = 'https://www.cbnits.com/8f51d32f18bdc755f747d8daacff1659.jpg'
  headerCyberSecurityTitle = 'News';
  headerCyberSecurityParaOne = 'Leading the path of innovation!';
  headerCyberSecurityLanguageArray: any = [];
  cyberSecurityById: any;

  constructor(private titleService: Title, private service: CyberSecurityService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.titleService.setTitle("CBNITS")
    this.getHeaderData();
    this.getNewsByIdData();
  }

  //cyber-security Banner languages data
  getHeaderData() {
    this.service.getBannerLanguagesData().subscribe((result: any) => {
      this.headerCyberSecurityLanguageArray = result.data.reverse();
    })
  }

  //cyber-security ById languages data
  getNewsByIdData() {
    this.service.getNewsByIdData().subscribe((result: any) => {
      this.cyberSecurityById = result.data;
      this.cyberSecurityById.newsContent = this.sanitizer.bypassSecurityTrustHtml(this.cyberSecurityById.newsContent)
    })
  }
}
