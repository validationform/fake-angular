import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { GreatPlaceService } from './great-place.service';
@Component({
  selector: 'app-great-place',
  templateUrl: './great-place.component.html',
  styleUrls: ['./great-place.component.css']
})
export class GreatPlaceComponent implements OnInit {

  backgroundGreatPlaceImage = 'https://www.cbnits.com/8f51d32f18bdc755f747d8daacff1659.jpg'
  headerGreatPlaceTitle = 'Press Releases';
  headerGreatPlaceParaOne = 'Leading the path of innovation!';
  headerGreatPlaceLanguageArray: any = [];
  greatPlaceById: any;

  constructor(private titleService: Title, private service: GreatPlaceService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.titleService.setTitle("CBNITS")
    this.getHeaderData();
    this.getPressReleaseByIdData();
  }
  //great-place Banner Languages data
  getHeaderData() {
    this.service.getBannerLanguagesData().subscribe((result: any) => {
      this.headerGreatPlaceLanguageArray = result.data.reverse();
    })
  }
  //great-place By Id Data
  getPressReleaseByIdData() {
    return this.service.getPressReleaseByIdData().subscribe((result: any) => {
      this.greatPlaceById = result.data;
      this.greatPlaceById.content = this.sanitizer.bypassSecurityTrustHtml(this.greatPlaceById.content)
    })
  }
}
