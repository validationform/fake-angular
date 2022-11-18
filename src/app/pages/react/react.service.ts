import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/url.constant';

@Injectable({
  providedIn: 'root'
})
export class ReactService {

  constructor(private http: HttpClient) { }

   //Banner languages api
   getBannerLanguagesData() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
        page: "Banner",
        category: "Languages"
    })
  }
  
   //Development api
   getReactDevelopmentData() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
        page: "React JS",
        category: "Our React JS Development"
    })
  }

   //Advantages api
   getReactAdvantagesData() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
        page: "React JS",
        category: "Advantages of hiring React JS"
    })
  }
}
