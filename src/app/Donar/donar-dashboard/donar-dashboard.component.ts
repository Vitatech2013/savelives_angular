import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DonarService } from 'src/app/Shared/Service/donar.service';
import { Location } from '@angular/common';
import { OrgainisationService } from 'src/app/Shared/Service/orgainisation.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateReqBloodComponent } from '../update-req-blood/update-req-blood.component';

@Component({
  selector: 'app-donar-dashboard',
  templateUrl: './donar-dashboard.component.html',
  styleUrls: ['./donar-dashboard.component.scss']
})
export class DonarDashboardComponent implements OnInit {
searchForm!:FormGroup
reqBloodForm!:FormGroup
donarProfile!:FormGroup
districts:any
bloodGroups:any
presentDonor:any
donors:any
allOrgs:any
viewBloodReq:any
myProfile:any
donorRes:any
orgResult:any
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
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
    this.presentDonor=this.donarService.getDonorFromLocal()
    this.bloodGroups=this.donarService.bloodGroups
    this.districts=this.donarService.Districts
    //emergengyblood API
    this.donarService.todayEmergencyBlood(this.todayDate).subscribe((res:any)=>{
      this.emergencyBlood=res
    })

    // view blood req API
    this.donarService.viewReqBlood().subscribe((res:any)=>{
      this.viewBloodReq=res
    })
    // get donors API
    this.donarService.getDonors().subscribe((res:any)=>{
      this.donors=res      
    })
    // get Orgs API
this.donarService.getOrgs().subscribe((res:any)=>{
  this.allOrgs=res
})
// view Profile API
this.donarService.showMyProfile(this.presentDonor.PhoneNo).subscribe(res=>{
  this.myProfile=res  
})
// search form
    this.searchForm=this.fb.group({
      BloodGroup:['',[Validators.required]],
      District:['',[Validators.required]]
    })

    // req blood form
    this.reqBloodForm=this.fb.group({
      Name:['',[Validators.required]],
      Age:['',[Validators.required]],
      BloodGroup:['',[Validators.required]],
      PhoneNo:['',[Validators.required]],
      Address:['',[Validators.required]],
      Date:['',[Validators.required]],
      RequiredUnits:['',[Validators.required]],
    })
// profileForm
this.donarProfile=this.fb.group({
  Name:['',[Validators.required]],
  FatherName:['',[Validators.required]],
  PhoneNo:['',[Validators.required]],
  Email:['',[Validators.required]],
  Gender:['',[Validators.required]],
  Age:['',[Validators.required]],
  BloodGroup:['',[Validators.required]],
  LastDonation:['',[Validators.required]],
  District:['',[Validators.required]],
  Area:['',[Validators.required]],
  Address:['',[Validators.required]],
})

  }

  profileBtn(){
    this.donarProfile.patchValue({
      Name:this.myProfile.Name,
      FatherName:this.myProfile.FatherName,
      PhoneNo:this.myProfile.PhoneNo,
      Email:this.myProfile.Email,
      Gender:this.myProfile.Gender,
      Age:this.myProfile.Age,
      BloodGroup:this.myProfile.BloodGroup,
      LastDonation:this.myProfile.LastDonation,
      District:this.myProfile.District,
      Area:this.myProfile.Area,
      Address:this.myProfile.Address,
    })
  }
  reqBloodSubmit(){
    if(this.reqBloodForm.valid){
      this.donarService.requestBlood(this.reqBloodForm.value).subscribe((res:any)=>{
        if(res){
          alert("requsted successfully");
          this.reqBloodForm.reset()
          this.ngOnInit()
          
        }else{
          alert("requested Successfully")
        }
      })
    }else{
      alert("please fill required fields")
    }
    
  }

  search(){
   this.donarService.searchDonar(this.searchForm.value.District,this.searchForm.value.BloodGroup).subscribe((res:any)=>{
    this.donorRes=res
    
   }) 
   this.orgService.searchBloodUnits(this.searchForm.value.District,this.searchForm.value.BloodGroup).subscribe((res:any)=>{
    this.orgResult=res
    
   })
  }

  update(){
this.donarService.updateMyProfile(this.myProfile._id,this.donarProfile.value).subscribe((res:any)=>{
if(res){
  alert("update successfull")
  this.myProfile=res
  this.profileBtn()
  
  
}else{
  alert('update failed')
}
},err=>{
  alert('something went wrong')
})
  }
  editReq(v:any){
this.dialog.open(UpdateReqBloodComponent,{
  data:v
}).afterClosed().subscribe(res=>{
  this.ngOnInit()
})
  }


  deleteReq(v:any){
const result=confirm("Are you sure you want to delete?")
if(result){
  this.donarService.deleteReqBlood(v._id).subscribe((res:any)=>{
    this.ngOnInit()
  })
}
}

donarLogout(){}

}
