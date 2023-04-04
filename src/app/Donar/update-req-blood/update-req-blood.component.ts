import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DonarService } from 'src/app/Shared/Service/donar.service';

@Component({
  selector: 'app-update-req-blood',
  templateUrl: './update-req-blood.component.html',
  styleUrls: ['./update-req-blood.component.scss']
})
export class UpdateReqBloodComponent implements OnInit {
  updateReqBloodForm!:FormGroup
  bloodGroups:any
  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private fb:FormBuilder,
    private donarServiece:DonarService,
    private dialog:MatDialogRef<UpdateReqBloodComponent>
  ) { }

  ngOnInit(): void {
    this.bloodGroups=this.donarServiece.bloodGroups
    this.updateReqBloodForm=this.fb.group({
      Name:['',[Validators.required]],
      Age:['',[Validators.required]],
      BloodGroup:['',[Validators.required]],
      PhoneNo:['',[Validators.required]],
      Address:['',[Validators.required]],
      Date:['',[Validators.required]],
      RequiredUnits:['',[Validators.required]], 
    })
    this.updateReqBloodForm.patchValue({
      Name:this.data.Name,
      Age:this.data.Age,
      BloodGroup:this.data.BloodGroup,
      PhoneNo:this.data.PhoneNo,
      Address:this.data.Address,
      Date:this.data.Date,
      RequiredUnits:this.data.RequiredUnits,
    })
  }
  updateReqBloodSubmit(){
    if(this.updateReqBloodForm.valid){
this.donarServiece.updateReqBlood(this.data._id,this.updateReqBloodForm.value).subscribe((res:any)=>{
  this.dialog.close()
})
  }
}
}
