import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/url.constant';

@Injectable({
  providedIn: 'root'
})
export class CareerService {

  constructor(private http:HttpClient) { }
  
  //project completed api
  getProjectComplected() {
    return this.http.post(url + 'getPageWiseDatabyCategory', {
      page: 'Career',
      category: 'Projects Completed',
    });
  }

  //four reason api
  getFourReason() {
    return this.http.post(url + 'getPageWiseDatabyCategory', {
      page: 'Career',
      category: 'Four Reasons',
    });
  }

   //Banner languages data
   getBannerLanguagesData() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
        page: "Banner",
        category: "Languages"
    })
  }

   //opportunities API
   getOpportunities(){
    return this.http.get(url + "getallCareerPost")
  }
}
