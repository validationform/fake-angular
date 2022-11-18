import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CareerService } from './career.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css'],
})
export class CareerComponent implements OnInit {
  backgroundImage =
    'https://www.cbnits.com/7f1f23e12fdfb70ada8dda8b3555bddc.jpg';
  headerTitle = 'Join The';
  headerSpan = 'Cbnits Team';
  headerParaOne =
    'You can check the latest job openings here if you are looking to be a part of a your, vibrant and growing team.';
  headerParaTwo = 'Take your first step to an incredible career with us.';
  headerLanguageArray: any = [];
  dupId: any;

  isOpen = true;
  complectedProject: any = [];
  reason: any = [];
  reason1: any = [];
  opportunityArray: any = []; //opportunity array

  //mailto declaration part start ******************
  mailtoHeader = 'mailto:?';
  subjectProp = 'subject=';
  bodyProp = 'body=';
  amp = '&amp;';
  breakStr = '%0D%0A';
  footer = 'Powered by Esploro!';
  test =
    'mailto:?subject=Europe PMC citation&amp;body=PROTAIN MEASUREMENT WITH THE FOLIN PENOL REAGENT.%0D%0ALowry O H, Rosebrough N J, Farr A L, Randall R J%0D%0AJournal%20of%20Biological%20Chemistry.%201951%20Nov%3B193(1)%3A265-275%0D%0A%0D%0Ahttp://europepmc.org/article/MED/14907713%0D%0A%0D%0A%0D%0A PROTAIN MEASUREMENT WITH THE FOLIN PENOL REAGENT.%0D%0ALowry O H, Rosebrough N J, Farr A L, Randall R J%0D%0AJournal%20of%20Biological%20Chemistry.%201951%20Nov%3B193(1)%3A265-275%0D%0A%0D%0Ahttp://europepmc.org/article/MED/14907713" target="_self" class="action small semi-bold enabled';

  demoSubject = 'Some example subject - can be anything really';
  demoAssets: mailtoAsset[] = [
    {
      title: 'PROTAIN MEASUREMENT WITH THE FOLIN PENOL REAGENT',
      lines: [
        'Lowry O H, Rosebrough N J, Farr A L, Randall R J',
        'Journal of Biological Chemistry. 1951 Nov%3B193(1)%3A265-275',
        'http://europepmc.org/article/MED/14907713',
      ],
    },
    {
      title:
        'Interference by monosaccharides with the estimation of tyrosine and proteins using the Folin-Ciocalteu phenol reagent',
      lines: [
        "O'Sullivan J, Mathison GE",
        'Anal Biochem, 35(2):540-542, 01 Jun 1970',
        'https://europepmc.org/article/MED/5450192',
      ],
    },
    {
      title:
        'Antioxidant capacity of some herbs/spices from cameroon: a comparative study of two methods.',
      lines: [
        'Agbor GA, Oben JE, Ngogang JY, Xinxing C, Vinson JA',
        'J Agric Food Chem, 53(17):6819-6824, 01 Aug 2005',
        'https://europepmc.org/article/MED/16104805',
      ],
    },
  ];
  //mailto declaration part end*********************

  constructor(
    private titleService: Title,
    private service: CareerService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.titleService.setTitle('CBNITS');
    this.getProjectComplectedData();
    this.getFourReasonData();
    this.getHeaderData();
    this.getOpportunitiesData();
  }

  //Banner languages data
  getHeaderData() {
    this.service.getBannerLanguagesData().subscribe((result: any) => {
      this.headerLanguageArray = result.data.reverse();
    });
  }

  // fetch Project Complected Api
  getProjectComplectedData() {
    this.service.getProjectComplected().subscribe((result: any) => {
      this.complectedProject = result?.data[0].description;
      console.log('Complected Project array=>', this.complectedProject);
    });
  }

  //Fetching Four reason api
  getFourReasonData() {
    this.service.getFourReason().subscribe((result: any) => {
      this.reason1 = result?.data[0].description.filter(
        (datas: any, idx: any) => {
          const parseData = JSON.parse(datas, idx);
          this.reason.push(parseData);
          console.log('Four Reason array=>', this.reason);
        }
      );
    });
  }

  // fetching opportunity API
  getOpportunitiesData() {
    this.service.getOpportunities().subscribe((result: any) => {
      this.opportunityArray = result.data;
      console.log('opportunities data=>', this.opportunityArray);
    });
  }

  //check both id same or not function
  onToggle(id: any): void {
    this.dupId = id;
    if (this.isOpen == true) {
      this.isOpen = false;
    } else {
      this.isOpen = true;
    }
  }

  // mail to part starts***************
  // function for StringifiedAssets
  getStringifiedAssets(
    assets: mailtoAsset[],
    subject: string = 'some subject you know'
  ) {
    let str = '';
    assets.forEach((asset) => {
      str =
        str +
        asset.title.toUpperCase() +
        this.breakStr +
        this.joinLines(asset.lines) +
        this.breakStr +
        this.breakStr;
    });
    const url = `${this.mailtoHeader}${this.subjectProp}${subject}&${this.bodyProp}${str}${this.footer}`;
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  //function for join line (mailto part)
  joinLines(lines: string[]) {
    return lines.join(this.breakStr);
  }
  //mail to part ends***************
}

//interface for mailto asset
export interface mailtoAsset {
  title: string;
  lines: string[];
}
