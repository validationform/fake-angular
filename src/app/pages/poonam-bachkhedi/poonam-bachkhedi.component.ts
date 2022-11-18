import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { PoonamBachkhediService } from './poonam-bachkhedi.service';

@Component({
  selector: 'app-poonam-bachkhedi',
  templateUrl: './poonam-bachkhedi.component.html',
  styleUrls: ['./poonam-bachkhedi.component.css']
})
export class PoonamBachkhediComponent implements OnInit {
  backgroundPoonamBachkhediImage = 'https://www.cbnits.com/8f51d32f18bdc755f747d8daacff1659.jpg'
  headerPoonamBachkhediTitle = 'Press Releases';
  headerPoonamBachkhediParaOne = 'Leading the path of innovation!';
  headerPoonamBachkhediLanguageArray: any = []
  poonamBachkhediById: any;

  constructor(private titleService: Title, private service: PoonamBachkhediService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.titleService.setTitle("CBNITS")
    this.getHeaderData();
    this.getPressReleaseByIdData();
  }

  //poonam-bacjhkhedi Banner languages data
  getHeaderData() {
    this.service.getBannerLanguagesdata().subscribe((result: any) => {
      this.headerPoonamBachkhediLanguageArray = result.data.reverse();
    })
  }

  //poonam-bacjhkhedi languages by id data
  getPressReleaseByIdData() {
    this.service.getPressReleaseByIdData().subscribe((result: any) => {
      this.poonamBachkhediById = result.data;
      this.poonamBachkhediById.content = this.sanitizer.bypassSecurityTrustHtml(this.poonamBachkhediById.content)
    })
  }
}
