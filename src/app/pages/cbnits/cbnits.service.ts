import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/url.constant';

@Injectable({
  providedIn: 'root'
})
export class CbnitsService {

  constructor(private http: HttpClient) { }

  //Cbnits Banner languages data
  getBannerLanguagesData() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
      page: "Banner",
      category: "Languages"
    })
  }

  //Cbnits By Id languages data
  getNewsByIdData() {
    return this.http.get(url + "getNewsByID?newsID=62f24974ed0a6b4574b301f1", {

    })
  }
}
