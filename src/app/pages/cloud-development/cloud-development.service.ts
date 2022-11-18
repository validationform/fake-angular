import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/url.constant';

@Injectable({
  providedIn: 'root',
})
export class CloudDevelopmentService {
  constructor(private http: HttpClient) {}

  //cloud development service api
  getDevelopmentServices() {
    return this.http.post(url + 'getPageWiseDatabyCategory', {
      page: 'Cloud Development',
      category: 'Our Cloud Development Services',
    });
  }

  
 //Banner languages api
 getBannerLanguagesData() {
  return this.http.post(url + "getPageWiseDatabyCategory", {
      page: "Banner",
      category: "Languages"
  })
}
}
