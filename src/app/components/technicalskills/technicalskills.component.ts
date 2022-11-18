import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TechnicalskillsService } from './technicalskills.service';
@Component({
  selector: 'app-technicalskills',
  templateUrl: './technicalskills.component.html',
  styleUrls: ['./technicalskills.component.css'],
})
export class TechnicalskillsComponent implements OnInit {
  @Input()
  firstTitle = '';

  @Input()
  firstTitleBlueText = '';

  @Input()
  secondTitle = '';

  @Input()
  content = '';

  @Input()
  technologyStackArray: any = [];

  @Input()
  pageName = '';

  techSkillsData: any = [];
  rowActive = 0;
  fullstackobject: FullstackType[] = [];

  constructor(
    private router: Router,
    private titleService: Title,
    private service: TechnicalskillsService
  ) {}

  ngOnInit(): void {
    this.onSkillClick(this.technologyStackArray[0]);
  }

  //Hire us data
  hireus(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.router.navigate(['/hireus']);
  }

  //Onclick to get technicalskills data
  onSkillClick(skillObject: any) {
    this.rowActive = skillObject.id;
    const payload = {
      page: this.pageName,
      category: skillObject.value,
    };
    this.service.getTechnicalSkillsData(payload).subscribe((result: any) => {
      this.techSkillsData = result.data;
    });
  }
}

interface FullstackType {
  id?: number;
  name?: string;
  tech?: string;
  techName?: string;
  img?: string;
}
