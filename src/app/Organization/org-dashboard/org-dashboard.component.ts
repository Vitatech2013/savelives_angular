import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DonarService } from 'src/app/Shared/Service/donar.service';
import { OrgainisationService } from 'src/app/Shared/Service/orgainisation.service';
import { UpdateAvailableBloodComponent } from '../update-available-blood/update-available-blood.component';

@Component({
  selector: 'app-org-dashboard',
  templateUrl: './org-dashboard.component.html',
  styleUrls: ['./org-dashboard.component.scss']
})
export class OrgDashboardComponent implements OnInit {
  addAvailable!:FormGroup
  searchForm!:FormGroup
  orgUpdate!:FormGroup
  presentOrg:any
  showAvailable:any
  districts:any
  bloodGroups:any
  donorsList:any
  allOrgs:any
  reqBlood:any
  donorRes:any
  orgResult:any
  myOrgProfile:any
  emergencyBlood:any

  today = new Date();
  dd = String(this.today.getDate()).padStart(2, '0');
 mm = String(this.today.getMonth() + 1).padStart(2, '0'); 
 yyyy = this.today.getFullYear();

todayDate =this.yyyy+'-'+ this.mm + '-' + this.dd;

  constructor(
    private fb:FormBuilder,
    private donarService:DonarService,
    private orgService:OrgainisationService,
    public dialog:MatDialog
  ) { 
    
  }

  ngOnInit(): void {
    this.presentOrg=this.orgService.getOrgDetailsFromLocal()
    this.bloodGroups=this.donarService.bloodGroups
    this.districts=this.donarService.Districts
    this.orgService.getEmergencyBlood(this.todayDate).subscribe((res:any)=>{
      this.emergencyBlood=res
    })
    this.orgService.showbloodAvail(this.presentOrg.PhoneNo).subscribe((res:any)=>{
      this.showAvailable=res
    })

    this.orgService.showDonorsList().subscribe((res:any)=>{
      this.donorsList=res
    })

    this.orgService.showAllOrgs('active').subscribe((res:any)=>[
      this.allOrgs=res
    ])

    this.orgService.showBloodReq().subscribe((res:any)=>{
      this.reqBlood=res
    })
    
    
    this.addAvailable=this.fb.group({
      bloodGroup:[''],
      units:['']
    })
    this.searchForm=this.fb.group({
      BloodGroup:[''],
      District:['']
    })
    
    this.orgUpdate=this.fb.group({
      Type:['',[Validators.required]],
      OrganisationName:['',[Validators.required]],
      PhoneNo:['',[Validators.required]],
      Email:['',[Validators.required]],
      District:['',[Validators.required]],
      Area:['',[Validators.required]],
      Address:['',[Validators.required]],
    })
  }
  profileShow(){
    
this.orgService.showOrgProfile(this.presentOrg.PhoneNo).subscribe((res:any)=>{
  this.myOrgProfile=res
this.orgUpdate.patchValue({
  Type:this.myOrgProfile.Type,
  OrganisationName:this.myOrgProfile.OrganisationName,
  PhoneNo:this.myOrgProfile.PhoneNo,
  Email:this.myOrgProfile.Email,
  District:this.myOrgProfile.District,
  Area:this.myOrgProfile.Area,
  Address:this.myOrgProfile.Address,
})  
})
  }
  addAvailabel(){
    let data={
      PhoneNo:this.presentOrg.PhoneNo,
      District:this.presentOrg.District,
      bloodGroup:this.addAvailable.value.bloodGroup,
      units:this.addAvailable.value.units
    }
this.orgService.addAvailabilities(data).subscribe((res:any)=>{
  alert('added successfully')
  this.ngOnInit()
},err=>{
  alert('somrthing went wrong')
})    
  }
  search(){
    this.donarService.searchDonar(this.searchForm.value.District,this.searchForm.value.BloodGroup).subscribe((res:any)=>{
     this.donorRes=res
     
     
    }) 
    this.orgService.searchBloodUnits(this.searchForm.value.District,this.searchForm.value.BloodGroup).subscribe((res:any)=>{
     this.orgResult=res
     
     
    })
   }
   updateOrg(){
    this.orgService.updateOrgProfile(this.presentOrg._id,this.orgUpdate.value).subscribe((res:any)=>{
      if(res){
      this.myOrgProfile=res
      alert('updated successfully')
    }else{
      alert('not updated')
    }
    })
   }

   editAvaiBlood(b:any){
    this.dialog.open(UpdateAvailableBloodComponent,{
      data:b
    }).afterClosed().subscribe(res=>{
     this.ngOnInit()
      
    })

   }

   deletaAailBlood(b:any){
    const result=confirm("Are You sure you want to Delete?")
    if(result){
      this.orgService.deleteAvailableBlood(b._id).subscribe((res:any)=>{
        this.ngOnInit()
      })
    }
   }

orgLogout(){

}
}
