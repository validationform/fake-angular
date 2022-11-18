import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { EdTechService } from './ed-tech.service';

@Component({
  selector: 'app-ed-tech',
  templateUrl: './ed-tech.component.html',
  styleUrls: ['./ed-tech.component.css']
})
export class EdTechComponent implements OnInit {

  edTechBackgroundImage = 'https://www.cbnits.com/61f760668d1d54f3cbb4a36382f92287.jpg'
  edTechHeaderTitle ='Education Website';
  edTechHeaderSpan ='Case Study';
  edTechHeaderLanguageArray: any = [];

  overviewHeading ='overview';
  overviewSpan = "The students and parents need to register and login into the platform. In the dashboard section they will be able to access the courses. Video conferencing will be integrated where the users will get a clear idea of the subject. In Forum section users will discuss about the assignments and courses. The admin will be responsible for looking after the entire functionality of the platform."
  overviewImg = "https://cbnits.s3.us-east-1.amazonaws.com/cseMain.jpg"

  functionalityArray =[
    {
      id:1,
      tick:'https://cbnits.s3.us-east-1.amazonaws.com/list-icon.png',
      text:'Most of the students who require a clear idea on a subject prefer video conferencing. So, we incorporate subscription course module and video conferencing in the website.'
    },
    {
      id:2,
      tick:'https://cbnits.s3.us-east-1.amazonaws.com/list-icon.png',
      text:'Course creation will help the students and parents to find the best courses that platform offer. We have incorporated unique courses, videos, and content along with the study materials into the website in PDF, audio files and video format.'
    },
    {
      id:3,
      tick:'https://cbnits.s3.us-east-1.amazonaws.com/list-icon.png',
      text:'Dashboards offer students, parents, and teachers a way to better visualize the progress by providing a mix of reports and assessments. Depending on the student’s age, parents can also review the data gathered via the dashboard. This would be helpful for parents as they can monitor their child’s improvement.'
    },
    {
      id:4,
      tick:'https://cbnits.s3.us-east-1.amazonaws.com/list-icon.png',
      text:'Forums create a way for students to mingle and discuss courses, assignments, and other relevant information. It also provides an extra facility for students to get answers from their fellow students or professors.'
    },
    {
      id:5,
      tick:'https://cbnits.s3.us-east-1.amazonaws.com/list-icon.png',
      text:'The trust of the learners often builds on the feedback from other learners. So, we have incorporated rating and review section in the platform.'
    },
    {
      id:6,
      tick:'https://cbnits.s3.us-east-1.amazonaws.com/list-icon.png',
      text:'Various secured payment gateway included in the platform like credit card, PayPal, Stripe and so on which should be easy for learners to pay and for trainers to get their earnings.'
    },
  ];


  weDidHeading = "what we did for";
  weDidSpan="the platform";
  weDidArray = [
    {
      id: 1,
      wedidImg: "https://cbnits.s3.us-east-1.amazonaws.com/cseIcon1.png",
      wedidSpan: "Complete UI UX designs"
    },
    {
      id: 2,
      wedidImg: "https://cbnits.s3.us-east-1.amazonaws.com/cseIcon2.png",
      wedidSpan: "Programing the web interface and Mobile App"
    },
    {
      id: 3,
      wedidImg: "https://cbnits.s3.us-east-1.amazonaws.com/cseIcon3.png",
      wedidSpan: "We have made it responsive for all platforms"
    }
  ]

  technologyHeading="technology";
  technologySpan="used"

  technologyStackArray = [
    {
      id: 1,
      techImg: "https://cbnits.s3.us-east-1.amazonaws.com/cst1.png",
      techSpan: "HTML"
    },
    {
      id: 2,
      techImg: "https://cbnits.s3.us-east-1.amazonaws.com/cst3.png",
      techSpan: "CSS"
    },
    {
      id: 3,
      techImg: "https://cbnits.s3.us-east-1.amazonaws.com/cst4.png",
      techSpan: "React"
    },
    {
      id: 4,
      techImg: "https://cbnits.s3.us-east-1.amazonaws.com/cst5.png",
      techSpan: "Node"
    },
    {
      id: 5,
      techImg: "https://cbnits.s3.us-east-1.amazonaws.com/cst7.png",
      techSpan: "AWS"
    }
  ]

  constructor(private titleService:Title, private service: EdTechService) { }

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.titleService.setTitle('CBNITS');
    this.getHeaderData();
  }

   //fetch Banner languages data
   getHeaderData() {
    this.service.getBannerLanguagesData().subscribe((result: any)=> {
      this.edTechHeaderLanguageArray = result.data.reverse();
    })
  }

}
