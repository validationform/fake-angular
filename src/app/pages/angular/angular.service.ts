import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/url.constant';

@Injectable({
  providedIn: 'root'
})
export class AngularService {

  constructor(private http: HttpClient) { }

  //Development offerings data
  getAngularDevelopmentData() {
    return this.http.post( url + "getPageWiseDatabyCategory", {
        page: "Angular Js Development Service",
        category: "Our AngularJs Development"
    })
  }

   //Advantages data
   getAngularAdvantagesData() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
        page: "Angular Js Development Service",
        category: "Advantages of Hiring Angular JS"
    })
  }

   //Banner languages data
   getBannerLanguagesData() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
        page: "Banner",
        category: "Languages"
    })
  }
}
