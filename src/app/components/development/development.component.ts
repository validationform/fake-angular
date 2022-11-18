import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.css']
})
export class DevelopmentComponent implements OnInit {

  @Input()
  developmentArray:any = [];
  developmentListIcon = 'https://cbnits.s3.us-east-1.amazonaws.com/list-icon.png';

  @Input()
  developmentImage = '';
  
  @Input()
  developmentPara = '';

  @Input()
  developmentHeading = '';

  @Input()
  developmentSkyHeading = '';

  @Input()
  developmentText = '';
  constructor() { }

  ngOnInit(): void {
  }

}
