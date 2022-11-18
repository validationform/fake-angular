import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  @Input()
  overviewHeading = '';

  @Input()
  overviewSpan = '';

  @Input()
  overviewImg = '';

  constructor() { }

  ngOnInit(): void {
  }

}
