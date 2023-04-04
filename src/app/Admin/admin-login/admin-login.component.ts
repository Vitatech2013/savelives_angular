import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Shared/Service/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  adminLoginForm!:FormGroup
  constructor(
    private fb:FormBuilder,
    private adminService:AdminService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.adminLoginForm=this.fb.group({
      username:[''],
      password:['']
    })
  }
  login(){
let uname=this.adminLoginForm.get('username')?.value
let pwd=this.adminLoginForm.get('password')?.value

this.adminService.adminLogin(uname,pwd).subscribe((res:any)=>{
  if(res){
    alert("login success")
   this.router.navigate(['/admin-dashboard'])
    
  }else{
    alert('login failed')
  }
},err=>{
  console.log(err);
  
})
  }
}
