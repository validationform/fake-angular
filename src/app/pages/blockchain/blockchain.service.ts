import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/url.constant';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

 
  constructor(private http:HttpClient) { }
  //capabilities data
  getCapabilities() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
        page: "BlockChain",
        category: "Capabilities"
    })
  }
  
   //Industries We Serve data
   getIndustries() {
    return this.http.post(url + "getPageWiseDatabyCategory", {
        page: "BlockChain",
        category: "Industry We Serve"
    })
  }
  
     //Tools and Technologies data
     getToolsAndTEchnology() {
      return this.http.post(url + "getPageWiseDatabyCategory", {
          page: "BlockChain",
          category: "Tools and Technologies"
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
