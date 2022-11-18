import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/url.constant';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  constructor(private http: HttpClient) { }

  //homepage Banner languages data
  getBannerLanguagesData() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
      page: "Banner",
      category: "Languages"
    })
  }

  //homepage getWhatWeDo data
  getWhatWeDoData() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
      page: "Home",
      category: "What We Do"
    })
  }

  //Homepage getOurExpertise data
  getOurExpertiseData() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
      page: "Home",
      category: "Our Expertise"
    })
  }

  //homepage getWhyCbnits data
  getWhyCbnitsData() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
      page: "Home",
      category: "Why CBNITS"
    })
  }

  // homepage WhyCustomers data
  getWhyCustomersData() {
    return this.http.post(url + "getHomePageImagebyCategory", {
      category: "Quotations"
    })
  }

  // homepage getDomainData data
  getDomainData() {
    return this.http.post(url + "getHomePageImagebyCategory", {
      category: "Special Domains"
    })
  }
}
