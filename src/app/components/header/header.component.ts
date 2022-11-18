import { Component, OnInit, Input } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input()
  backgroundImage = '';
  backgroundLinear = 'rgba(0, 0, 0, 1), rgba(0, 0, 0, 1)';

  @Input()
  headerTitle = '';

  @Input()
  headerSpan = '';

  @Input()
  headerParaOne = '';

  @Input()
  headerParaTwo = '';

  @Input()
  headerFile = '';

  @Input()
  headerLanguageArray: any = [];

  faBars = faBars;
  faXmarkCircle = faXmarkCircle;

  constructor() {}

  ngOnInit(): void {}
}
