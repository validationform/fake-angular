import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/url.constant';

@Injectable({
  providedIn: 'root'
})
export class SoftwareSupportService {

  constructor(private http: HttpClient) { }

  // software -support getSupportService page data
  getSupportService() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
      page: "Software Support",
      category: "Support Services of CBNITS",
    })
  }

  // software -support getSpecializedService page data
  getSpecializedServices() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
      page: "Software Support",
      category: "Specialized Services",
    })
  }

  // software -support getWhyChooseUS page data
  getWhyChooseUs() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
      page: "Software Support",
      category: "Why Choose Us",
    })
  }

  //software -support Banner languages data
  getBannerLanguagesData() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
      page: "Banner",
      category: "Languages"
    })
  }
}