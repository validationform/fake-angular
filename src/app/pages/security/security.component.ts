import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SecurityService } from './security.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {
  backgroundSecurityImage = 'https://www.cbnits.com/f4efd029f1f65b65b58d16153e4f98f6.jpg'
  headerSecurityTitle = 'I2chain';
  headerSecuritySpan = 'Case Study';
  headerSecurityLanguageArray: any = [];

  overviewHeading = 'overview';
  overviewSpan = "i2Chain’s SaaS application enables companies to securely share sensitive documents with anyone within or outside the organization. i2Chain enables mortgage companies, banks, accounting firms, hospitals, and others to safely share their PII, IP, and PHI with co-processing entities in compliance with GDPR and CCPA privacy regulations. i2Chain’s zero-click technology secures documents with encryption, policies, immutable audit logs, and it is cloud type and storage type agnostic."
  overviewImg = "https://cbnits.s3.us-east-1.amazonaws.com/csI2Main.jpg"


  wedidHeading = "what we did for";
  wedidSpan = "I2chain";
  wedidArray = [
    {
      id: 1,
      wedidImg: "https://cbnits.s3.us-east-1.amazonaws.com/csOptn1.png",
      wedidSpan: "Desktop app has been developed"
    },
    {
      id: 2,
      wedidImg: "https://cbnits.s3.us-east-1.amazonaws.com/csOptn2.png",
      wedidSpan: "Make this platform 100% secure"
    },
    {
      id: 3,
      wedidImg: "https://cbnits.s3.us-east-1.amazonaws.com/csOptn3.png",
      wedidSpan: "Alpha testing and integration testing"
    }
  ]


  techHeading = "technology";
  techSpan = "used"

  techStackArray = [
    {
      id: 1,
      techImg: "https://cbnits.s3.us-east-1.amazonaws.com/tu1.png",
      techSpan: "Blockchain"
    },
    {
      id: 2,
      techImg: "https://cbnits.s3.us-east-1.amazonaws.com/tu2.png",
      techSpan: "Crytography"
    },
    {
      id: 3,
      techImg: "https://cbnits.s3.us-east-1.amazonaws.com/tu3.png",
      techSpan: "React"
    },
    {
      id: 4,
      techImg: "https://cbnits.s3.us-east-1.amazonaws.com/tu4.png",
      techSpan: "AWS Cognito"
    },
    {
      id: 5,
      techImg: "https://cbnits.s3.us-east-1.amazonaws.com/tu5.png",
      techSpan: "Node"
    },
    {
      id: 6,
      techImg: "https://cbnits.s3.us-east-1.amazonaws.com/tu6.png",
      techSpan: "Electron"
    }
  ]

  buttonName = 'Hire Us';


  constructor(private titleService: Title, private service: SecurityService) { }

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.titleService.setTitle('CBNITS')
    this.getHeaderData();
  }

  //Security Banner languages data
  getHeaderData() {
    this.service.getBannerLanguagesData().subscribe((result: any) => {
      this.headerSecurityLanguageArray = result.data.reverse();
    })
  }

}
