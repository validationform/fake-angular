import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HrTechService } from './hr-tech.service';

@Component({
  selector: 'app-hr-tech',
  templateUrl: './hr-tech.component.html',
  styleUrls: ['./hr-tech.component.css']
})
export class HrTechComponent implements OnInit {

  backgroundHrTechImage = 'https://www.cbnits.com/41a133238b79fc7a253213844ad83c3e.jpg'
  headerHrTechTitle = 'HR-TECH';
  headerHrTechSpan = 'Case Study';
  headerHrTechLanguageArray: any = [];
  // techStackArray data
  techHeading = "technology";
  techSpan = "used"

  techStackArray = [
    {
      id: 1,
      techImg: "https://cbnits.s3.us-east-1.amazonaws.com/hrTu1.png",
      techSpan: "HTML"
    },
    {
      id: 2,
      techImg: "https://cbnits.s3.us-east-1.amazonaws.com/hrTu2.png",
      techSpan: "CSS"
    },
    {
      id: 3,
      techImg: "https://cbnits.s3.us-east-1.amazonaws.com/hrTu3.png",
      techSpan: "JAVASCRIPT"
    },
    {
      id: 4,
      techImg: "https://cbnits.s3.us-east-1.amazonaws.com/hrTu4.png",
      techSpan: "REACT NATIVE"
    },
    {
      id: 5,
      techImg: "https://cbnits.s3.us-east-1.amazonaws.com/hrTu5.png",
      techSpan: "JAVA SPRING"
    },
    {
      id: 6,
      techImg: "https://cbnits.s3.us-east-1.amazonaws.com/hrTu6.png",
      techSpan: "AWS RDS"
    },
    {
      id: 7,
      techImg: "https://cbnits.s3.us-east-1.amazonaws.com/hrTu7.png",
      techSpan: "TIGER GRAPH"
    },
  ];
  //functionality Array
  functionality = [
    {
      id: 1,
      img: 'https://cbnits.s3.us-east-1.amazonaws.com/list-icon.png',
      text: 'Highly Private'
    },
    {
      id: 2,
      img: 'https://cbnits.s3.us-east-1.amazonaws.com/list-icon.png',
      text: 'Trusted Network of Mentors'
    },
    {
      id: 3,
      img: 'https://cbnits.s3.us-east-1.amazonaws.com/list-icon.png',
      text: 'Easy to use - device agnostic (run on web, mobile and tablet)'
    },
    {
      id: 4,
      img: 'https://cbnits.s3.us-east-1.amazonaws.com/list-icon.png',
      text: 'Rich database of questions to ask mentors and coaching tips'
    },
    {
      id: 5,
      img: 'https://cbnits.s3.us-east-1.amazonaws.com/list-icon.png',
      text: 'Easy sharing of feedback- on users’ choice'
    },
  ]

  constructor(private titleService: Title, private service: HrTechService) { }

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.titleService.setTitle('CBNITS')
    this.getHeaderData();
  }

  //hr-tech Banner languages data
  getHeaderData() {
    this.service.getBannerLanguagesData().subscribe((result: any) => {
      this.headerHrTechLanguageArray = result.data.reverse();
    })
  }
}
