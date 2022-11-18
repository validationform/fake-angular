import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { throwError } from 'rxjs';
import { CbnitsCultureService } from './cbnits-culture.service';

@Component({
  selector: 'app-cbnits-culture',
  templateUrl: './cbnits-culture.component.html',
  styleUrls: ['./cbnits-culture.component.css']
})
export class CbnitsCultureComponent implements OnInit {

  backgroundCbnitsCultureImage = 'https://www.cbnits.com/8f51d32f18bdc755f747d8daacff1659.jpg'
  headerCbnitsCultureTitle = 'Press Releases';
  headerCbnitsCultureParaOne = 'Leading the path of innovation!';
  headerCbnitsCultureLanguageArray: any = [];
  cbnitsCultureById: any;

  constructor(private titleService: Title, private service: CbnitsCultureService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.titleService.setTitle("CBNITS")
    this.getHeaderData();
    this.getPressReleaseByIdData();
  }

  //cbnits-culture Banner languages data
  getHeaderData() {
    this.service.getBannerLanguagesData().subscribe((result: any) => {
      this.headerCbnitsCultureLanguageArray = result.data.reverse();
    })
  }
  //cbnits-culture by id data
  getPressReleaseByIdData() {
    this.service.getPressReleaseByIdData().subscribe((result: any) => {
      this.cbnitsCultureById = result.data;
      this.cbnitsCultureById.content = this.sanitizer.bypassSecurityTrustHtml(this.cbnitsCultureById.content)
    })
  }
}
