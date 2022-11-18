import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/url.constant';

@Injectable({
  providedIn: 'root'
})
export class CbnitsCultureService {

  constructor(private http: HttpClient) { }

  //cbnits-culture Banner languages data
  getBannerLanguagesData() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
      page: "Banner",
      category: "Languages"
    })
  }
  
  //cbnits-culture by id data
  getPressReleaseByIdData() {
    return this.http.get(url + "getPressReleaseByID?pressReleaseID=62f25b43ed0a6b4574b301f3", {})
  }
}
