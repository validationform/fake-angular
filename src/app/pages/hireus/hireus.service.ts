import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/url.constant';

@Injectable({
  providedIn: 'root'
})
export class HireusService {

  constructor(private http: HttpClient) { }

  getFixedBasisHiring() {
    return this.http.post(url + 'getPageWiseDatabyCategory', {
      page: 'Hire Us',
      category: 'Fixed Basis Hiring',
    });
  }

  //hire us Banner languages data
  getBannerLanguagesData() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
      page: "Banner",
      category: "Languages"
    })
  }
}
