import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/url.constant';

@Injectable({
  providedIn: 'root'
})
export class ClouddevopsService {

  constructor(private http:HttpClient) { }

  //cloud devops offring api
  getDevopsoffring() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
      page: "CLOUD & DEVOPS",
      category: "DEVOPS OFFERING",
    })
  }

  //Banner languages api
  getBannerLanguagesData() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
        page: "Cloud Devops",
        category: "Languages"
    })
  }
}
