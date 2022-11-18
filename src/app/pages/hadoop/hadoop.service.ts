import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { url } from 'src/url.constant';

@Injectable({
  providedIn: 'root'
})
export class HadoopService {

  constructor(private http:HttpClient) { }

   // Domain Expertise api
   getDomainExpertise() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
      page: "Hadoop",
      category: "Domain Expertise",
    })
  }

  // Cloudera Services api
  getClouderaServices() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
      page: "Hadoop",
      category: "Cloudera Services",
    })
  }

  //big-data cbnits api
  getBigDataCbnits() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
      page: "Hadoop",
      category: "Big Data Services",
    })
  }
  // Apache Hadoop api
  getHadoopPostOne() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
      page: "Hadoop",
      category: "Hadoop Post 1",
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
