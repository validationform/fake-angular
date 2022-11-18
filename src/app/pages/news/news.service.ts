import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/url.constant';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http: HttpClient) { }

  //Banner languages data
  getBannerLanguagesData() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
      page: "Banner",
      category: "Languages"
    })
  }
  //News LAnguages data
  getNewsAllData() {
    return this.http.get(url + "getallNews", {

    })
  }

}
