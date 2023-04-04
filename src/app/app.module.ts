import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './Shared/modules/material/material.module';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { DonarRegistrationComponent } from './Donar/donar-registration/donar-registration.component';
import { DonarLoginComponent } from './Donar/donar-login/donar-login.component';
import { DonarDashboardComponent } from './Donar/donar-dashboard/donar-dashboard.component';
import { OrgLoginComponent } from './Organization/org-login/org-login.component';
import { OrgSignupComponent } from './Organization/org-signup/org-signup.component';
import { OrgDashboardComponent } from './Organization/org-dashboard/org-dashboard.component';
import { UpdateAvailableBloodComponent } from './Organization/update-available-blood/update-available-blood.component';
import { UpdateReqBloodComponent } from './Donar/update-req-blood/update-req-blood.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    DonarRegistrationComponent,
    DonarLoginComponent,
    DonarDashboardComponent,
    OrgLoginComponent,
    OrgSignupComponent,
    OrgDashboardComponent,
    UpdateAvailableBloodComponent,
    UpdateReqBloodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
  
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
