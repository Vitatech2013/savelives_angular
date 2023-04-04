import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Shared/Service/admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
unAprovalList:any
approvedList:any
users:any
viewReqBlood:any
emergencyBlood:any

 today = new Date();
  dd = String(this.today.getDate()).padStart(2, '0');
 mm = String(this.today.getMonth() + 1).padStart(2, '0'); 
 yyyy = this.today.getFullYear();

todayDate =this.yyyy+'-'+ this.mm + '-' + this.dd;

  constructor(
    private router:Router,
    private adminService:AdminService
    ) { }

  ngOnInit(): void {
  this.adminService.getUnAprovalList().subscribe((res:any)=>{
    this.unAprovalList=res
  })
  this.adminService.getApprovedList().subscribe((res:any)=>{
    this.approvedList=res
  })
  this.adminService.getUsers().subscribe((res:any)=>{
    this.users=res
  })
  this.adminService.viewbloodReq().subscribe((res:any)=>{
    this.viewReqBlood=res
  })
  this.adminService.emergencyBlood(this.todayDate).subscribe((res:any)=>{
    this.emergencyBlood=res
  })

  }

  changeApprove(id:any){
    this.adminService.changeApproveApi(id,{"status":"active"}).subscribe(res=>{
      if(res){
        alert("approved Successfully")
        this.ngOnInit()
      }else{
        alert("something went wrong")
      }
      
      
    })
  }
  adminLogout(){
this.router.navigate(['welcome/admin-login'])
  }
}
