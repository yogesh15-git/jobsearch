import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule} from '@angular/forms';
import { EmployerRegisterComponent } from './employer-register/employer-register.component';
import { EmployeloginComponent } from './employelogin/employelogin.component';
import { CompanyloginComponent } from './companylogin/companylogin.component';
import { Home2Component } from './home2/home2.component';
import { ProfileComponent } from './profile/profile.component';
import { UploadDocumentComponent } from './upload-document/upload-document.component';
import { CompanyHomeComponent } from './company-home/company-home.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { PostJobsComponent } from './post-jobs/post-jobs.component';

import { LogoutComponent } from './logout/logout.component';
import { ViewEmpProfileComponent } from './view-emp-profile/view-emp-profile.component';
import { ViewPostJobsComponent } from './view-post-jobs/view-post-jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    EmployerRegisterComponent,
    EmployeloginComponent,
    CompanyloginComponent,
    Home2Component,
    ProfileComponent,
    UploadDocumentComponent,
    CompanyHomeComponent,
    CompanyProfileComponent,
    PostJobsComponent,
    
    LogoutComponent,
    ViewEmpProfileComponent,
    ViewPostJobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
