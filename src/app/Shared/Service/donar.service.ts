import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DonarService {
public bloodGroups=["A-Positive","A-Negative","AB-Positive","AB-Negative","B-Positive","B-Negative","O-Positive","O-Negative"]
public Districts=["Karimnagar", "Hyderabad","Warangal","Adilabad","Peddapalli","Jagithyal","RangaReddy"]
  constructor(private http:HttpClient) { }
url=environment.baseUrl

getDonorFromLocal(){
  return JSON.parse(sessionStorage.getItem('donor')!)
}

  donarRegistration(data:any){
return this.http.post(this.url+'/bloodDoner/registration',data)
  }
  donarLogin(PhoneNo:any,password:any){
    return this.http.get(this.url+'/bloodDoner/donerLogin?PhoneNo='+PhoneNo+'&Password='+password)
  }
  getDonors(){
    return this.http.get(this.url+'/bloodDoner/donorList')
  }
  getOrgs(){
    return this.http.get(this.url+'/bloodDoner/bloodBankList')
  }
  requestBlood(data:any){
    return this.http.post(this.url+'/bloodDoner/requestBlood',data)
  }
  searchDonar(d:any,b:any){
return this.http.get(this.url+'/bloodDoner/searchDoner?District='+d+'&BloodGroup='+b)
  }

  viewReqBlood(){
    return this.http.get(this.url+'/bloodDoner/ViewBloodreq')
  }
  showMyProfile(m:any){
    return this.http.get(this.url+'/bloodDoner/viewProfile?PhoneNo='+m)
  }
  updateMyProfile(id:any,data:any){
    return this.http.put(this.url+'/bloodDoner/updateProfile/'+id,data)
  }
  searchDanar(d:any,b:any){
    return this.http.get(this.url+'/bloodDoner/searchDoner?District='+d+'&BloodGroup='+b)
  }
  todayEmergencyBlood(date:any){
    return this.http.get(this.url+'/bloodDoner/urgentBlood?Date='+date)
  }
  deleteReqBlood(id:any){
    return this.http.delete(this.url+'/bloodDoner/deleteRequestBlood/'+id)
  }

  updateReqBlood(id:any,data:any){
    return this.http.put(this.url+'/bloodDoner/updateReqBlood/'+id,data)
  }
}
