import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TechnicalskillsService {

  constructor(private http:HttpClient) { }

  getTechnicalSkillsData(payload:any){
    return this.http.post("https://api.cbnits.com/getPageWiseDatabyCategory",{
      category:payload.category,
      page:payload.page
    })
  }
}
