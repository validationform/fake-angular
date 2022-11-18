import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ReactService } from './react.service';
@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.css'],
})
export class ReactComponent implements OnInit {
  reactBackgroundImage = 'https://www.cbnits.com/779cbae32ed2f045c4330a339e2d7072.jpg';
  reactHeaderTitle = 'React Js Development';
  reactHeaderSpan = 'Service';
  reactHeaderParaOne = 'no matter how complex your project is, at CBNITS, our cutting edge and best in';
  reactHeaderParaTwo = 'class Angular Development Services have predictable outcomes.';
  reactHeaderLanguageArray: any = [];

  developmentReactArray: any = [];
  developmentReactImage = '';
  developmentReactPara = 'Hire the best in the industry React Js developer from CBNITS to secure outstanding software development services according to your buisness requirements.';
  developmentReactHeading = 'our reactjs';
  developmentReactSkyHeading = 'development';

  advantagesReactArray: any = [];
  advantagesReactImage = '';
  advantagesReactButtonName = 'Hire Us';
  advantagesReactHeading = 'Advantages of hiring React JS developers from';
  advantagesReactSpan = 'CBNITS';

  constructor(private titleService: Title, private service: ReactService) {}

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.titleService.setTitle('CBNITS');
    this.getReactDevelopmentOfferingsData();
    this.getReactAdvantagesHiringData();
    this.getHeaderData();
  }

  //fetch Banner languages data
  getHeaderData() {
    this.service.getBannerLanguagesData().subscribe((result: any) => {
      this.reactHeaderLanguageArray = result.data.reverse();
    });
  }

  //fetch Development offerings data
  getReactDevelopmentOfferingsData() {
    this.service.getReactDevelopmentData().subscribe((result: any) => {
      this.developmentReactArray = result?.data[0].description;
      this.developmentReactImage = result?.data[0].image;
    });
  }

  //fetch Advantages data
  getReactAdvantagesHiringData() {
    this.service.getReactAdvantagesData().subscribe((result: any) => {
      this.advantagesReactArray = result?.data[0].description;
      this.advantagesReactImage = result?.data[0].image;
    });
  }
}
