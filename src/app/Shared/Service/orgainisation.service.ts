import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrgainisationService {

  constructor(private http:HttpClient) { }
url=environment.baseUrl
getOrgDetailsFromLocal(){
  return JSON.parse(sessionStorage.getItem('org')!)
}
  orgreg(data:any){
    return this.http.post(this.url+'/bloodBank/registration',data)
  }
  orgLogin(pNo:any,pwd:any){
    return this.http.get(this.url+'/bloodBank/bloodBanklogin?PhoneNo='+pNo+'&Password='+pwd)
  }
  addAvailabilities(data:any){
    return this.http.post(this.url+'/bloodBank/bloodAdd',data)
  }
  showbloodAvail(m:any){
    return this.http.get(this.url+'/bloodBank/showBlood?PhoneNo='+m)
  }
  showDonorsList(){
    return this.http.get(this.url+'/bloodBank/donerList')
  }
  showAllOrgs(s:any){
    return this.http.get(this.url+'/bloodBank/bloodBankList?status='+s)
  }
  showBloodReq(){
    return this.http.get(this.url+'/bloodBank/ViewBloodreq')
  }
  searchBloodUnits(d:any,b:any){
    return this.http.get(this.url+'/bloodBank/searchBloodUnits?District='+d+'&BloodGroup='+b)
  }
  showOrgProfile(p:any){
    return this.http.get(this.url+'/bloodBank/viewProfile?PhoneNo='+p)
  }
  updateOrgProfile(id:any,data:any){
    return this.http.put(this.url+'/bloodBank/updateProfile/'+id,data)
  }
  getEmergencyBlood(date:any){
    return this.http.get(this.url+'/bloodBank/urgentBlood?Date='+date)
  }

  updateAvailableBlood(id:any,data:any){
    return this.http.put(this.url+'/bloodBank/updatebloodUnits/'+id,data)
  }

  deleteAvailableBlood(id:any){
    return this.http.delete(this.url+'/bloodBank/deletebloodUnits/'+id)
  }
}
