import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/url.constant';

@Injectable({
  providedIn: 'root'
})
export class AboutpageService {

  constructor(private http:HttpClient) { }

  //About cbnits data
  getAboutCbnits() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
        page: "About Us",
        category: "About CBNITS"
    })
  }
  // Xfactor data
  getXFactor() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
        page: "About Us",
        category: "X Factor"
    })
  }
  //Diversity of our Team
  getDiversityOurTeam() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
        page: "About Us",
        category: "Diversity our Team"
    })
  }
  //Why cbnits
  getReasonToPickCbnits() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
        page: "About Us",
        category: "Reason to pic Cbnits"
    })
  }

   //Why cbnits
   getVisionMission() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
        page: "About Us",
        category: "Vission Mission"
    })
  }
  
  //Banner languages data
  getBannerLanguagesData() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
        page: "Banner",
        category: "Languages"
    })
  }
 // why cbnits data
 getWhyCbnitsData() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
        page: "Home",
        category: "Why CBNITS"
    })
  }
}
