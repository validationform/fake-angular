import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { url } from 'src/url.constant';

@Injectable({
  providedIn: 'root'
})
export class Dynamic365Service {

  constructor(private http:HttpClient) { }

  // Product And Solution api
  getProductAndSolution() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
      page: "Dynamic 365",
      category: "Product and Solution",
    })
  }

    // Dynamic 365 Last Post api
    getLastPost() {
      return this.http.post(url + "getPageWiseDatabyCategory", {
        page: "Dynamic 365",
        category: "Dynamic 365 Last Post",
      })
    }

      // Dynamic 365 First Post api
  getFirstPost() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
      page: "Dynamic 365",
      category: "Dynamic 365 First Post",
    })
  }

   //Banner languages api
   getBannerLanguagesData() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
        page: "Banner",
        category: "Languages"
    })
  }
}
