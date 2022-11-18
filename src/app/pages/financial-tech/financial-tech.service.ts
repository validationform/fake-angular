import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/url.constant';

@Injectable({
  providedIn: 'root'
})
export class FinancialTechService {

  constructor(private http: HttpClient) { }

  //financial-tech languages data
  getBannerLanguagesData() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
      page: "Banner",
      category: "Languages"
    })
  }

  //financial-tech by id language data
  getNewsByIdData() {
    return this.http.get(url + "getNewsByID?newsID=62f24cb9ed0a6b4574b301f2", {
    })
  }
}
