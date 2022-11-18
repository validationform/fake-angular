import { Component, OnInit } from '@angular/core';
import { Router, RouteReuseStrategy } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  //function for getting current full year
  currentYearLong(): number {
    return new Date().getFullYear();
  }

  // function for hire us
  hire(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.router.navigate(['/hireus']);
  }

  // function for Contact us
  contact(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.router.navigate(['/contact']);
  }

  // function for privacy policy
  privacy(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.router.navigate(['/privacy']);
  }

  // function for About us
  about(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.router.navigate(['/aboutus']);
  }

  // function for career page
  career(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.router.navigate(['/career']);
  }
}
