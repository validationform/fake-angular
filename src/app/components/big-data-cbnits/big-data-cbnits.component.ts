import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-big-data-cbnits',
  templateUrl: './big-data-cbnits.component.html',
  styleUrls: ['./big-data-cbnits.component.css'],
})
export class BigDataCbnitsComponent implements OnInit {
  @Input()
  bigDataDevelopmentArray: any = [];

  @Input()
  bigDataWhiteText = '';

  @Input()
  developersPara = '';

  @Input()
  bigDataOrangeText = '';

  @Input()
  bigDataImage = '';

  @Input()
  tickImage = '';

  constructor() {}

  ngOnInit(): void {}
}
