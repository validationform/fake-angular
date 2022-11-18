import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/url.constant';

@Injectable({
  providedIn: 'root'
})
export class MobileappService {

  constructor(private http: HttpClient) { }

  // mobileapp getToolsAndTechnology data
  getToolsAndTechnology() {
    return this.http.post(url + 'getPageWiseDatabyCategory', {
      page: 'Mobile App Development',
      category: 'Tool and Technology',
    });
  }

  // mobileapp getProductAndSolution data
  getProductAndSolution() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
      page: "Mobile App Development",
      category: "App Development Services",
    })
  }

  // mobileapp getMobilePost data
  getMobilePost() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
      page: "Mobile App Development",
      category: "Mobile Application Post",
    })
  }

  //Mobileapp Banner languages data
  getBannerLanguagesData() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
      page: "Banner",
      category: "Languages"
    })
  }
}
