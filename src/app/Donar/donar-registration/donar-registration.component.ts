import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DonarService } from 'src/app/Shared/Service/donar.service';

@Component({
  selector: 'app-donar-registration',
  templateUrl: './donar-registration.component.html',
  styleUrls: ['./donar-registration.component.scss']
})
export class DonarRegistrationComponent implements OnInit {
donarReg!:FormGroup
bloodGroups:any
districts:any
  constructor(
    private fb:FormBuilder,
    private donarService:DonarService
    ) { }

  ngOnInit(): void {
this.bloodGroups=this.donarService.bloodGroups
this.districts=this.donarService.Districts
    this.donarReg=this.fb.group({
      Name:['',[Validators.required]],
      FatherName:['',[Validators.required]],
      PhoneNo:['',[Validators.required]],
      Email:['',[Validators.required]],
      Password:['',[Validators.required]],
      Gender:['',[Validators.required]],
      Age:['',[Validators.required]],
      BloodGroup:['',[Validators.required]],
      LastDonation:['',[Validators.required]],
      District:['',[Validators.required]],
      Area:['',[Validators.required]],
      Address:['',[Validators.required]],
    })
  }
signup(){
 this.donarService.donarRegistration(this.donarReg.value).subscribe((res:any)=>{
  if(res){
    alert('Registration successful')
  }else{
    alert('Registration failed')
  }
 })
  
}
}
