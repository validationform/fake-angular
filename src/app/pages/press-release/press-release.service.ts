import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'src/url.constant';

@Injectable({
  providedIn: 'root'
})
export class PressReleaseService {

  constructor(private http: HttpClient) { }
  //press-release Banner languages data
  getBannerLanguagesData() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
      page: "Banner",
      category: "Languages"
    })
  }

  //press release all data
  getPressReleaseAllData() {
    return this.http.get(url + "getallPressRelease", {
    })
  }
}
