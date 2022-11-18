import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/url.constant';

@Injectable({
  providedIn: 'root'
})
export class ImpactPandemicService {

  constructor(private http: HttpClient) { }

  //impact-pandemic Banner language data
  getBannerLanguagesData() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
      page: "Banner",
      category: "Languages"
    })
  }

  //impact-pandemic By Id languages data
  getNewsByIdData() {
    return this.http.get(url + "getNewsByID?newsID=6017a6ff8a878f75b673a043", {
    })
  }
}
