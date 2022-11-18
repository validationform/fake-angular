import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-microsoft',
  templateUrl: './microsoft.component.html',
  styleUrls: ['./microsoft.component.css']
})
export class MicrosoftComponent implements OnInit {
  @Input()
  microsoftArray:any = [];

  @Input()
  microsoftImg = '';
  
  @Input()
  microsoftText = '';

  @Input()
  microsoftHeading = '';

  
  @Input()
  microsoftSpan = '';

  
  @Input()
  microsoftPara = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
