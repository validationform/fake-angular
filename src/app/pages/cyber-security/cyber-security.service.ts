import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/url.constant';

@Injectable({
  providedIn: 'root'
})
export class CyberSecurityService {

  constructor(private http: HttpClient) { }

  //cyber-security Banner Language data
  getBannerLanguagesData() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
      page: "Banner",
      category: "Languages"
    })
  }

  //cyber-security ByID languages data
  getNewsByIdData() {
    return this.http.get(url + "getNewsByID?newsID=5fd75698c3237723a46f659b", {
    })
  }
}
