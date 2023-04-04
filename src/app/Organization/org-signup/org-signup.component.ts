import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DonarService } from 'src/app/Shared/Service/donar.service';
import { OrgainisationService } from 'src/app/Shared/Service/orgainisation.service';

@Component({
  selector: 'app-org-signup',
  templateUrl: './org-signup.component.html',
  styleUrls: ['./org-signup.component.scss']
})
export class OrgSignupComponent implements OnInit {
orgReg!:FormGroup
districts:any
  constructor(
    private fb:FormBuilder,
    private donarService:DonarService,
    private orgService:OrgainisationService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.districts=this.donarService.Districts

    this.orgReg=this.fb.group({
      Type:['',[Validators.required]],
      OrganisationName:['',[Validators.required]],
      PhoneNo:['',[Validators.required]],
      Email:['',[Validators.required]],
      Password:['',[Validators.required]],
      District:['',[Validators.required]],
      Area:['',[Validators.required]],
      Address:['',[Validators.required]],
      status:['Pending']
    })
  }
orgSignup(){
  
 this.orgService.orgreg(this.orgReg.value).subscribe((res:any)=>{
  alert("Registered Sucessfull")
  this.router.navigate(['welcome/org-login'])
 })
  
}
}
