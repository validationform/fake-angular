import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GolangService } from './golang.service';
@Component({
  selector: 'app-golang',
  templateUrl: './golang.component.html',
  styleUrls: ['./golang.component.css']
})
export class GolangComponent implements OnInit {
  golangBackgroundImage = 'https://www.cbnits.com/1f490ccac769e446d07a1f3e7d0b5179.jpg'
  golangHeaderTitle ='Golang Development';
  golangHeaderParaOne = "With CBNITS' top of the line Golang development services, bring";
  golangHeaderParaTwo = 'your most complex software ideas to life.';
  golangHeaderLanguageArray: any = [];
  
  developmentGolangArray: any = [];
  developmentGolangImage = "";
  developmentGolangPara = 'Hire the best in the industry Golang developer from CBNITS to secure outstanding software development services according to your buisness requirements.'
  developmentGolangHeading = 'our golang';
  developmentGolangSkyHeading = 'development';
  developmentGolangText = 'Service under a single umbrella';

  advantagesGolangArray: any = [];
  advantagesGolangImage = "";
  advantagesGolangButtonName = 'Hire Us';
  advantagesGolangHeading = 'Advantages of hiring Golang developers from';
  advantagesGolangSpan = 'CBNITS';
  constructor(private titleService:Title, private service: GolangService) { }

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.titleService.setTitle('CBNITS');
    this.getGolangDevelopmentOfferingsData();
    this.getGolangAdvantagesHiringData();
    this.getHeaderData();
  }

  //Development offerings data
  getGolangDevelopmentOfferingsData() {
    this.service.getGolangDevelopmentData().subscribe((result: any)=> {
      this.developmentGolangArray = result?.data[0].description;
      this.developmentGolangImage = result?.data[0].image;
    })
  }

   //Advantages data
  getGolangAdvantagesHiringData() {
    this.service.getGolangAdvantagesData().subscribe((result: any)=> {
      this.advantagesGolangArray = result?.data[0].description;
      this.advantagesGolangImage = result?.data[0].image;
    })
  }

   //Banner languages data
   getHeaderData() {
    this.service.getBannerLanguagesData().subscribe((result: any)=> {
      this.golangHeaderLanguageArray = result.data.reverse();
    })
  }


}
