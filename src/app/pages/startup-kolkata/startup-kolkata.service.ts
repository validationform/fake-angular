import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/url.constant';

@Injectable({
  providedIn: 'root'
})
export class StartupKolkataService {

  constructor(private http: HttpClient) { }
  //StartupKolkata Banner languages data
  getBannerLanguagesData() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
      page: "Banner",
      category: "Languages"
    })
  }

  //get StartupKolkata By id language data
  getNewsByIdData() {
    return this.http.get(url + "getNewsByID?newsID=62fb9272ed0a6b4574b3021a", {

    })
  }
}
