import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/url.constant';

@Injectable({
  providedIn: 'root'
})
export class BoomingIndustryService {

  constructor(private http: HttpClient) { }

  //booming_industry banner language data
  getBannerLanguagesData() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
      page: "Banner",
      category: "Languages"
    })
  }

  //booming_industry ById languages data
  getNewsByIdData() {
    return this.http.get(url + "getNewsByID?newsID=5fd7575ec3237723a46f659c", {
    })
  }
}
