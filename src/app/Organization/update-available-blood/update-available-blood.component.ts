import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DonarService } from 'src/app/Shared/Service/donar.service';
import { OrgainisationService } from 'src/app/Shared/Service/orgainisation.service';

@Component({
  selector: 'app-update-available-blood',
  templateUrl: './update-available-blood.component.html',
  styleUrls: ['./update-available-blood.component.scss']
})
export class UpdateAvailableBloodComponent implements OnInit {
updateAvailable!:FormGroup
bloodGroups:any
  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private donarService:DonarService,
    private orgService:OrgainisationService,
    private fb:FormBuilder,
    private dialog:MatDialogRef<UpdateAvailableBloodComponent>
    
  ) { }

  ngOnInit(): void {
    console.log(this.data);
    
    this.bloodGroups=this.donarService.bloodGroups
    this.updateAvailable=this.fb.group({
      bloodGroup:['',[Validators.required]],
      units:['',[Validators.required]]
    })
    this.updateAvailable.patchValue({
      bloodGroup:this.data.bloodGroup,
      units:this.data.units
    })
  }
  availabelUpdate(){
    if(this.updateAvailable.valid){
    this.orgService.updateAvailableBlood(this.data._id,this.updateAvailable.value).subscribe((res:any)=>{
      this.dialog.close({data:res})
    })
  }else{
    alert("please fill required format")
  }
  }
}
