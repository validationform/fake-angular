import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/url.constant';

@Injectable({
  providedIn: 'root'
})
export class GlobalRadianceService {

  constructor(private http: HttpClient) { }

  //Banner languages data
  getBannerLanguagesData() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
      page: "Banner",
      category: "Languages"
    })
  }

  //News by id languages data
  getNewsByIdData() {
    return this.http.get(url + "getNewsByID?newsID=634939eaed0a6b4574b302aa", {
    })
  }
}
