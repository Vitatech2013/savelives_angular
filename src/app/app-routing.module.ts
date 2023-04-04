import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { DonarDashboardComponent } from './Donar/donar-dashboard/donar-dashboard.component';
import { DonarLoginComponent } from './Donar/donar-login/donar-login.component';
import { DonarRegistrationComponent } from './Donar/donar-registration/donar-registration.component';
import { OrgDashboardComponent } from './Organization/org-dashboard/org-dashboard.component';
import { OrgLoginComponent } from './Organization/org-login/org-login.component';
import { OrgSignupComponent } from './Organization/org-signup/org-signup.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'',redirectTo:'welcome', pathMatch:'full'},
  {path:'welcome',component:WelcomeComponent, children:[
    {path:'admin-login', component:AdminLoginComponent},
    {path:'donar-login',component:DonarLoginComponent},
    {path:'donar-reg',component:DonarRegistrationComponent},
    {path:'org-login', component:OrgLoginComponent},
    {path:'org-reg', component:OrgSignupComponent}
]},

  {path:'admin-dashboard', component:AdminDashboardComponent},
  {path:'donar-dashboard',component:DonarDashboardComponent},
  {path:'org-dashboard', component:OrgDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
