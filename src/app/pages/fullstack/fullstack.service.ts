import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { url } from 'src/url.constant';

@Injectable({
  providedIn: 'root'
})
export class FullstackService {

  constructor(private http:HttpClient) { }

  //Advantages of hiring api
  getAdvantagesOfHiring() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
      page: "Full Stack Developer",
      category: "Advantages of Hiring Full-Stack Developers",
    })
  }

    //Dedicated Full Stack Developer api
    getDedicatedFullStackDeveloper() {
      return this.http.post(url + "getPageWiseDatabyCategory", {
        page: "Full Stack Developer",
        category: "Dedicated Full Stack Developer",
      })
    }


     //Banner languages data api
  getBannerLanguagesData() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
        page: "Banner",
        category: "Languages"
    })
  }

}
