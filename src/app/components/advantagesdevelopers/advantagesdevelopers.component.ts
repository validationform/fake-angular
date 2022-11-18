import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advantagesdevelopers',
  templateUrl: './advantagesdevelopers.component.html',
  styleUrls: ['./advantagesdevelopers.component.css']
})
export class AdvantagesdevelopersComponent implements OnInit {

  @Input()
  advantagesArray:any = [];
  advantagesListIcon= "https://cbnits.s3.us-east-1.amazonaws.com/list-icon.png";

  @Input()
  advantagesButtonName = '';

  @Input()
  advantagesHeading = '';

  @Input()
  advantagesSpan = '';

  @Input()
  advantagesImage = '';

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  //function for hire us button
  hireUs(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.router.navigate(['/hireus'])
  }
}
