import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PressReleaseService } from './press-release.service';

@Component({
  selector: 'app-press-release',
  templateUrl: './press-release.component.html',
  styleUrls: ['./press-release.component.css']
})
export class PressReleaseComponent implements OnInit {

  constructor(private titleService: Title, private service: PressReleaseService) { }

  backgroundPressReleaseImage = 'https://www.cbnits.com/8f51d32f18bdc755f747d8daacff1659.jpg'
  headerPressReleaseTitle = 'Press Releases';
  headerPressReleaseParaOne = 'Leading the path of innovation!';
  headerPressReleaseLanguageArray: any = [];
  pressReleaseBlockArray: any = [];

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.titleService.setTitle("CBNITS")
    this.getHeaderData();
    this.getPressReleaseAllData();
  }

  //press-release Banner languages data
  getHeaderData() {
    this.service.getBannerLanguagesData().subscribe((result: any) => {
      this.headerPressReleaseLanguageArray = result.data.reverse();
    })
  }

  //press-release all languages data
  getPressReleaseAllData() {
    this.service.getPressReleaseAllData().subscribe((result: any) => {
      this.pressReleaseBlockArray = result.data;
    })
  }
}
