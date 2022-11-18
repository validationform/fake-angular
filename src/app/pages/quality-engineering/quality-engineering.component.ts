import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { QualityEngineeringService } from './quality-engineering.service';

@Component({
  selector: 'app-quality-engineering',
  templateUrl: './quality-engineering.component.html',
  styleUrls: ['./quality-engineering.component.css']
})
export class QualityEngineeringComponent implements OnInit {

  backgroundQualityEngineerImage = 'https://www.cbnits.com/ba1255526aad4e06219853ca1abb4ef5.jpg'
  headerQualityEngineerTitle = 'Quality ';
  headerQualityEngineerSpan = 'Engineering';
  headerQualityEngineerParaOne = 'Proven Methodology To Improve Software Quality';
  headerQualityEngineerLanguageArray: any = [];

  //cloud engineering
  cEngineering = [
    {
      id: 1,
      img: 'https://cbnits.s3.us-east-1.amazonaws.com/qu1.png',
      name: 'Agile Testing'
    },
    {
      id: 2,
      img: 'https://cbnits.s3.us-east-1.amazonaws.com/qu2.png',
      name: 'DevOps Testing'
    },
    {
      id: 3,
      img: 'https://cbnits.s3.us-east-1.amazonaws.com/qu3.png',
      name: 'Functional Testing'
    },
    {
      id: 4,
      img: 'https://cbnits.s3.us-east-1.amazonaws.com/qu4.png',
      name: 'Load & Performance Testing'
    },
    {
      id: 5,
      img: 'https://cbnits.s3.us-east-1.amazonaws.com/qu5.png',
      name: 'Mobile Testing'
    },
    {
      id: 6,
      img: 'https://cbnits.s3.us-east-1.amazonaws.com/qu6.png',
      name: 'Test Automation'
    },
    {
      id: 7,
      img: 'https://cbnits.s3.us-east-1.amazonaws.com/qu7.png',
      name: 'Service Virtalization'
    },
    {
      id: 8,
      img: 'https://cbnits.s3.us-east-1.amazonaws.com/qu8.png',
      name: 'Test Data Management'
    },
    {
      id: 9,
      img: 'https://cbnits.s3.us-east-1.amazonaws.com/qu9.png',
      name: 'Security Testing'
    },
    {
      id: 10,
      img: 'https://cbnits.s3.us-east-1.amazonaws.com/qu9.png',
      name: 'Monitoring & Analysis'
    },
  ];
  constructor(private router: Router, private titleService: Title, private service: QualityEngineeringService) { }

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.titleService.setTitle('CBNITS')
    this.getHeaderData();
  }

  //quality-Engineer Banner languages data
  getHeaderData() {
    this.service.getBannerLanguagesData().subscribe((result: any) => {
      this.headerQualityEngineerLanguageArray = result.data.reverse();
    })
  }

  hireus(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.router.navigate(['/hireus']);
  }

}
