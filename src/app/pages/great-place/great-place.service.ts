import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/url.constant';

@Injectable({
  providedIn: 'root'
})
export class GreatPlaceService {

  constructor(private http: HttpClient) { }

  //great-place Banner languages data
  getBannerLanguagesData() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
      page: "Banner",
      category: "Languages"
    })
  }
  
  //great-place by id data
  getPressReleaseByIdData() {
    return this.http.get(url + "getPressReleaseByID?pressReleaseID=62f3a963ed0a6b4574b30201", {
    })
  }
}
