import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AboutpageService } from './aboutpage.service';

@Component({
  selector: 'app-aboutpage',
  templateUrl: './aboutpage.component.html',
  styleUrls: ['./aboutpage.component.css'],
})
export class AboutpageComponent implements OnInit {
  arrayWhyCbnits: any = [];
  wideHeading: string = '';
  wideDesc: string = '';
  supportHeading: string = '';
  supportDesc: string = '';
  focusHeading: string = '';
  focusDesc: string = '';
  amazingHeading: string = '';
  amazingDesc: string = '';
  
  headerTitle = 'About';
  headerSpan = 'Us';
  backgroundImage =
    'https://www.cbnits.com/75e3e8aab65936f63931b5bfcd5de8da.jpg';
  headerParaOne = 'Our expertise , know more about what we do.';
  headerLanguageArray: any = [];
  aboutCbnitsPara = '';
  xFactor = '';
  diversity = '';
  constructor(private titleService: Title, private service: AboutpageService) {}

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.titleService.setTitle('CBNITS');
    this.getAboutCbnitsData();
    this.getXFactorData();
    this.getDiversityOurTeamData();
    this.getHeaderData();
    this.getWhyCbnits();
  }


  // fetching about cbnits data
  getAboutCbnitsData() {
    this.service.getAboutCbnits().subscribe((result: any) => {
      this.aboutCbnitsPara = result?.data[0].description;
    });
  }

  //fetching x-factors of cbnits data
  getXFactorData() {
    this.service.getXFactor().subscribe((result: any) => {
      this.xFactor = result?.data[0].description;
    });
  }

  //fetching diversity of our team data
  getDiversityOurTeamData() {
    this.service.getDiversityOurTeam().subscribe((result: any) => {
      this.diversity = result?.data[0].description;
    });
  }

  //Banner languages data
  getHeaderData() {
    this.service.getBannerLanguagesData().subscribe((result: any) => {
      this.headerLanguageArray = result.data.reverse();
    });
  }

  //fetching reasons to pick cbnits as your it partner data
  getWhyCbnits() {
    this.service.getWhyCbnitsData().subscribe((result: any) => {
      this.arrayWhyCbnits = result.data.reverse();
      this.wideHeading = this.arrayWhyCbnits[0].name;
      this.wideDesc = this.arrayWhyCbnits[0].description[0];
      this.supportHeading = this.arrayWhyCbnits[1].name;
      this.supportDesc = this.arrayWhyCbnits[1].description[0];
      this.focusHeading = this.arrayWhyCbnits[2].name;
      this.focusDesc = this.arrayWhyCbnits[2].description[0];
      this.amazingHeading = this.arrayWhyCbnits[3].name;
      this.amazingDesc = this.arrayWhyCbnits[3].description[0];
    });
  }
}
