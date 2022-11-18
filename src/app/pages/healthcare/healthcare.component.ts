import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HealthcareService } from './healthcare.service';

@Component({
  selector: 'app-healthcare',
  templateUrl: './healthcare.component.html',
  styleUrls: ['./healthcare.component.css']
})
export class HealthcareComponent implements OnInit {
  backgroundHealthCareImage = 'https://www.cbnits.com/074a3dfd74ddca021f63d6aa60aba168.jpg'
  headerHealthCareTitle = 'Health Startup';
  headerHealthCareSpan = 'Case Study';
  headerHealthCareLanguageArray: any = [];


  overviewHeading = 'overview';
  overviewSpan = "Teamwellness acts as a platform extensively for health practitioners and patients who are seeking advice. The platform connects both the patients and practitioner for an online consultancy and eases the medical facility in a very lucid manner. Starting from report sharing to medicinal advice everything can be done sitting at residence. The appointment with the most preferred doctors can be easily made through the website and apps and also can choose insurance partners for affordable choices."
  overviewImg = "https://cbnits.s3.us-east-1.amazonaws.com/csHealthMain2.png"

  // patient activity start 
  firstHeading = "Patients Activity:";
  firstArray = [
    {
      id: 1,
      firstSpan: '1',
      firstSpan1: 'Download the Mobile App'
    },
    {
      id: 2,
      firstSpan: '2',
      firstSpan1: 'Sign in / Sign Up'
    },
    {
      id: 3,
      firstSpan: '3',
      firstSpan1: 'Choose Speciality of Treatment'
    },
    {
      id: 4,
      firstSpan: '4',
      firstSpan1: 'View lIst of Doctors'
    },
    {
      id: 5,
      firstSpan: '5',
      firstSpan1: 'Filter on the basis of location and experience'
    },
    {
      id: 6,
      firstSpan: '6',
      firstSpan1: 'View Profile and Portfolio'
    },
    {
      id: 7,
      firstSpan: '7',
      firstSpan1: 'View background of Medical History'
    },
    {
      id: 8,
      firstSpan: '8',
      firstSpan1: 'Check Availability on Calendar'
    },
    {
      id: 9,
      firstSpan: '9',
      firstSpan1: 'Make Payments'
    },
    {
      id: 10,
      firstSpan: '10',
      firstSpan1: 'Book Appointment Request'
    },
    {
      id: 11,
      firstSpan: '11',
      firstSpan1: 'See Status of Booking'
    },
    {
      id: 12,
      firstSpan: '12',
      firstSpan1: 'Get Confirmation and receive online Appointment link'
    },
    {
      id: 13,
      firstSpan: '13',
      firstSpan1: 'Review'
    }
  ]
  // patient activity end 

  // Practitioners' Activity start
  secondHeading = "Practitioners' Activity:";

  secondArray = [
    {
      id: 1,
      secondSpan: '1',
      secondSpan1: 'Sign In / Sign Up'
    },
    {
      id: 2,
      secondSpan: '2',
      secondSpan1: 'Create Profile'
    },
    {
      id: 3,
      secondSpan: '3',
      secondSpan1: 'Add details of speciality'
    },
    {
      id: 4,
      secondSpan: '4',
      secondSpan1: 'Add Medical experience, and Education'
    },
    {
      id: 5,
      secondSpan: '5',
      secondSpan1: 'Put availability on calendar'
    },
    {
      id: 6,
      secondSpan: '6',
      secondSpan1: 'View Request'
    },
    {
      id: 7,
      secondSpan: '7',
      secondSpan1: 'Accept / Decline'
    },
    {
      id: 8,
      secondSpan: '8',
      secondSpan1: 'View Upcoming Booking'
    },
    {
      id: 9,
      secondSpan: '9',
      secondSpan1: 'Send Meeting URL'
    },
    {
      id: 10,
      secondSpan: '10',
      secondSpan1: 'Receive Payments'
    },
    {
      id: 11,
      secondSpan: '11',
      secondSpan1: 'Provide rating and feedback'
    }
  ]
  // Practitioners' Activity end 

  // admin activity start 
  thirdHeading = "Admin Activity:"
  thirdArray = [
    {
      id: 1,
      thirdSpan: '1',
      thirdSpan1: "Practitioner's Profile Management"
    },
    {
      id: 2,
      thirdSpan: '2',
      thirdSpan1: 'Patients Management'
    },
    {
      id: 3,
      thirdSpan: '3',
      thirdSpan1: 'Appointment Management'
    },
    {
      id: 4,
      thirdSpan: '4',
      thirdSpan1: 'Booking Calendar Management'
    },
    {
      id: 5,
      thirdSpan: '5',
      thirdSpan1: 'Reports Management'
    },
    {
      id: 6,
      thirdSpan: '6',
      thirdSpan1: 'Online Meeting Management'
    },
    {
      id: 7,
      thirdSpan: '7',
      thirdSpan1: 'Payment Management'
    },
    {
      id: 8,
      thirdSpan: '8',
      thirdSpan1: 'Rating and Review Management'
    }
  ]
  // admin activity end 

  // what we did activity 
  mainImg = 'https://cbnits.s3.us-east-1.amazonaws.com/csHealthMain.png';
  mainHeading = 'what we did for'
  mainSpan = 'the platform'
  platformArray = [
    {
      id: 1,
      platformImg: 'https://cbnits.s3.us-east-1.amazonaws.com/list-icon.png',
      platformSpan: 'Our entire designing team has built the entire HTML and CSS of the platform'
    },
    {
      id: 2,
      platformImg: 'https://cbnits.s3.us-east-1.amazonaws.com/list-icon.png',
      platformSpan: 'Our entire designing team has built the entire HTML and CSS of the platform'
    },
    {
      id: 3,
      platformImg: 'https://cbnits.s3.us-east-1.amazonaws.com/list-icon.png',
      platformSpan: 'Our development team has comprehensively implemented and developed the entire design concept.'
    }
  ]
  // what we did activity end 

  // technology used
  techHeading = "technology";
  techSpan = "used"

  techStackArray = [
    {
      id: 1,
      techImg: "https://cbnits.s3.us-east-1.amazonaws.com/cst1.png",
      techSpan: "HTML"
    },
    {
      id: 2,
      techImg: "https://cbnits.s3.us-east-1.amazonaws.com/cst2.png",
      techSpan: "Bootstrap"
    },
    {
      id: 3,
      techImg: "https://cbnits.s3.us-east-1.amazonaws.com/cst3.png",
      techSpan: "CSS"
    },
    {
      id: 4,
      techImg: "https://cbnits.s3.us-east-1.amazonaws.com/cst4.png",
      techSpan: "React"
    },
    {
      id: 5,
      techImg: "https://cbnits.s3.us-east-1.amazonaws.com/cst5.png",
      techSpan: "Node"
    },
    {
      id: 6,
      techImg: "https://cbnits.s3.us-east-1.amazonaws.com/cst6.png",
      techSpan: "MySQL"
    },
    {
      id: 7,
      techImg: "https://cbnits.s3.us-east-1.amazonaws.com/cst7.png",
      techSpan: "AWS"
    },
    {
      id: 8,
      techImg: "https://cbnits.s3.us-east-1.amazonaws.com/cst8.png",
      techSpan: "Photoshop"
    },
    {
      id: 9,
      techImg: "https://cbnits.s3.us-east-1.amazonaws.com/cst9.png",
      techSpan: "React Native"
    }
  ]
  // technology used end 

  constructor(private titleService: Title, private service: HealthcareService) { }

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.titleService.setTitle('CBNITS')
    this.getHeaderData();
  }

  //helath-care Banner languages data
  getHeaderData() {
    this.service.getBannerLanguagesData().subscribe((result: any) => {
      this.headerHealthCareLanguageArray = result.data.reverse();
    })
  }
}
