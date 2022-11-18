import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/url.constant';

@Injectable({
  providedIn: 'root'
})
export class BigInnovationService {

  constructor(private http: HttpClient) { }

  //big-innovation Banner langauges data
  getBannerLanguagesData() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
      page: "Banner",
      category: "Languages"
    })
  }

  //big-innovation by id data
  getPressReleaseByIdData() {
    return this.http.get(url + "getPressReleaseByID?pressReleaseID=62f3aa81ed0a6b4574b30202", {
    })
  }
}
