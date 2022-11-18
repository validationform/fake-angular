import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/url.constant';

@Injectable({
  providedIn: 'root'
})
export class CbnitsLeadershipService {

  constructor(private http: HttpClient) { }

  //cbnits-leadership Banner languages data
  getBannerLanguagesData() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
      page: "Banner",
      category: "Languages"
    })
  }
  
  //cbnits-leadership By Id data
  getPressReleaseByIdData() {
    return this.http.get(url + "getPressReleaseByID?pressReleaseID=62f39fb6ed0a6b4574b30200", {

    })
  }
}
