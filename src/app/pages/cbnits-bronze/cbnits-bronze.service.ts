import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/url.constant';

@Injectable({
  providedIn: 'root'
})
export class CbnitsBronzeService {

  constructor(private http: HttpClient) { }

  //cbnits-bronze Banner languages data
  getBannerLanguegasData() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
      page: "Banner",
      category: "Languages"
    })
  }

  //cbnits-bronze By Id data
  getPressReleaseByIdData() {
    return this.http.get(url + "getPressReleaseByID?pressReleaseID=62f3ab6aed0a6b4574b30203", {

    })
  }
}
