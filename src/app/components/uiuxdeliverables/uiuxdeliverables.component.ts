import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-uiuxdeliverables',
  templateUrl: './uiuxdeliverables.component.html',
  styleUrls: ['./uiuxdeliverables.component.css']
})
export class UiuxdeliverablesComponent implements OnInit {

  @Input()
  uiUxDeliverablesHeadingBlack = '';

  @Input()
  uiUxDeliverablesHeadingBlue = '';

  @Input()
  uiUxArray: any = [];
  constructor() { }

  ngOnInit(): void {
  }

}
