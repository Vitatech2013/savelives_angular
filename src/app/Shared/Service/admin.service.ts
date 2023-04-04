import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
url=environment.baseUrl
  constructor(private http:HttpClient) { }

adminLogin(uname:any,pwd:any){  

  return this.http.get(this.url+'/admin/adminlogin?username='+uname+'&password='+pwd)
}
getUnAprovalList(){
  return this.http.get(this.url+'/admin/hospitalunaprovelist')
}
getApprovedList(){
  return this.http.get(this.url+'/admin/hospitalaprovelist')
}
changeApproveApi(id:any,data:any){
  return this.http.put(this.url+'/admin/updateAprove/'+id,data)
}
getUsers(){
  return this.http.get(this.url+'/admin/userList')
}
viewbloodReq(){
  return this.http.get(this.url+'/admin/ViewBloodreq')
}
emergencyBlood(date:any){
 return this.http.get(this.url+'/admin/emergency?Date='+date)
}
}
