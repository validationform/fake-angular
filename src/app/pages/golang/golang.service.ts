import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/url.constant';

@Injectable({
  providedIn: 'root'
})
export class GolangService {

  constructor(private http: HttpClient) { }

   //Development data
   getGolangDevelopmentData() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
        page: "Go Lang",
        category: "Go Lang Development"
    })
  }

   //Advantages data
   getGolangAdvantagesData() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
        page: "Go Lang",
        category: "Advantages of Hiring Go Lang Developer"
    })
  }

   //Banner languages data
   getBannerLanguagesData() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
        page: "Banner",
        category: "Languages"
    })
  }
}
