import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OrgainisationService } from 'src/app/Shared/Service/orgainisation.service';

@Component({
  selector: 'app-org-login',
  templateUrl: './org-login.component.html',
  styleUrls: ['./org-login.component.scss']
})
export class OrgLoginComponent implements OnInit {
orgLogin!:FormGroup
  constructor(
    private fb:FormBuilder,
    private orgService:OrgainisationService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.orgLogin=this.fb.group({
      PhoneNo:[''],
      Password:['']
    })
  }
Login(){
this.orgService.orgLogin(this.orgLogin.value.PhoneNo, this.orgLogin.value.Password).subscribe((res:any)=>{
  console.log(res);
  
  if(res){
    alert("login success")
    sessionStorage.setItem('org', JSON.stringify(res))
    this.router.navigate(['/org-dashboard'])
  }else{
    alert("login failed")
  }
},err=>{
  console.log(err);
  
})
}
}
