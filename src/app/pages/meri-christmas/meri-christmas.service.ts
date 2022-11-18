import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/url.constant';

@Injectable({
  providedIn: 'root'
})
export class MeriChristmasService {

  constructor(private http: HttpClient) { }

  //meri-christmas Banner languages data
  getBannerLanguagesData() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
      page: "Banner",
      category: "Languages"
    })
  }

  //meri-christmas by id data
  getPressreleaseByIdData() {
    return this.http.get(url + "getPressReleaseByID?pressReleaseID=5ff4566b46e3802ff428afd4", {

    })
  }
}
