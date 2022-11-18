import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/url.constant';

@Injectable({
  providedIn: 'root'
})
export class PoonamBachkhediService {

  constructor(private http: HttpClient) { }

  //poonam-bacjhkhedi Banner languages data
  getBannerLanguagesdata() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
      page: "Banner",
      category: "Languages"
    })
  }

  //poonam-bacjhkhedi By Id languages data
  getPressReleaseByIdData() {
    return this.http.get(url + "getPressReleaseByID?pressReleaseID=63492ce5ed0a6b4574b302a9", {
    })
  }
}
