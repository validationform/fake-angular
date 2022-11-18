import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SapService } from './sap.service';

@Component({
  selector: 'app-sap',
  templateUrl: './sap.component.html',
  styleUrls: ['./sap.component.css'],
})
export class SapComponent implements OnInit {
  backgroundImage = 'https://www.cbnits.com/dd0f0c772c502f085a9e8a58206a49a7.jpg';
  headerTitle = 'Our Expertise';
  headerSpan = 'On SAP';
  headerLanguageArray: any = [];
  ourExpertiseArray= [
    {
      id:1,
      expertiseImage:'https://cbnits.s3.us-east-1.amazonaws.com/sapIcon6.png',
      name:'SAP ABAP-ABAP on HANA',
    },
    {
      id:2,
      expertiseImage:'https://cbnits.s3.us-east-1.amazonaws.com/sapIcon8.png',
      name:'Flori/SAP Ui5',
    },
    {
      id:3,
      expertiseImage:'https://cbnits.s3.us-east-1.amazonaws.com/sapIcon9.png',
      name:'OData',
    },
    {
      id:4,
      expertiseImage:'https://cbnits.s3.us-east-1.amazonaws.com/sapIcon10.png',
      name:'Workflow',
    }

  ];
  //Section One Array
  SapArray = [
    {
      id: 1,
      img: '../../assets/sap1.jfif',
      name: 'Web Applications',
    },
    {
      id: 2,
      img: '../../assets/sap2.png',
      name: 'Ms Office Applications',
    },
    {
      id: 3,
      img: '../../assets/sap3.png',
      name: 'Desktop Application',
    },
    {
      id: 4,
      img: '../../assets/sap4.png',
      name: 'SAP UI5',
    },
    {
      id: 5,
      img: '../../assets/sap5.png',
      name: 'PDF',
    },
    {
      id: 6,
      img: '../../assets/sap6.png',
      name: 'SAP GUI',
    },
  ];

  constructor(
    private router: Router,
    private titleService: Title,
    private service: SapService
  ) {}

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.titleService.setTitle('CBNITS');
    this.getHeaderData();
  }

  //Banner languages data
  getHeaderData() {
    this.service.getBannerLanguagesData().subscribe((result: any) => {
      this.headerLanguageArray = result.data.reverse();
    });
  }

  //function for hire us button
  hireus(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.router.navigate(['/hireus']);
  }
}
