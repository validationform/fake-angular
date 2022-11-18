import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/url.constant';

@Injectable({
  providedIn: 'root'
})
export class HomeConnectedService {

  constructor(private http: HttpClient) { }
  //home-connected Banner languages data
  getBannerLanguagesData() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
      page: "Banner",
      category: "Languages"
    })
  }

  //home-connected By Id languages data
  getNewsByIdData() {
    return this.http.get(url + "getNewsByID?newsID=6034eeab0a186d1d204b97d2", {
    })
  }
}
