import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/url.constant';

@Injectable({
  providedIn: 'root'
})
export class NodeService {

  constructor(private http: HttpClient) { }

  
   //Development data
   getNodeDevelopmentData() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
        page: "Node JS",
        category: "Node JS Development"
    })
  }

   //Advantages data
   getNodeAdvantagesData() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
        page: "Node JS",
        category: "Advantages of hiring NodeJS"
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
