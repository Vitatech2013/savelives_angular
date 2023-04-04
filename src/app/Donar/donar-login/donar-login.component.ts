import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DonarService } from 'src/app/Shared/Service/donar.service';

@Component({
  selector: 'app-donar-login',
  templateUrl: './donar-login.component.html',
  styleUrls: ['./donar-login.component.scss']
})
export class DonarLoginComponent implements OnInit {
donarLogin!:FormGroup
  constructor(
    private fb:FormBuilder,
    private donarService:DonarService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.donarLogin=this.fb.group({
      PhoneNo:[''],
      Password:['']
    })
  }
login(){
this.donarService.donarLogin(this.donarLogin.value.PhoneNo, this.donarLogin.value.Password).subscribe((res:any)=>{
  console.log(res);
  
  if(res){
    alert("Login Success")
    sessionStorage.setItem('donor',JSON.stringify(res))
    this.router.navigate(['/donar-dashboard'])

  }else{
    alert("Login Failed")
  }
})
}
}
