import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { EmployerRegisterComponent } from './employer-register/employer-register.component';
import { EmployeloginComponent } from './employelogin/employelogin.component';
import { CompanyloginComponent } from './companylogin/companylogin.component';
import { AppComponent } from './app.component';
import { Home2Component } from './home2/home2.component';
import { ProfileComponent } from './profile/profile.component';
import { UploadDocumentComponent } from './upload-document/upload-document.component';
import { CompanyHomeComponent } from './company-home/company-home.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { PostJobsComponent } from './post-jobs/post-jobs.component';
import { ViewEmpProfileComponent } from './view-emp-profile/view-emp-profile.component';
import {ViewPostJobsComponent} from './view-post-jobs/view-post-jobs.component';


const routes: Routes = [
  { path:'',component:HomeComponent},
  { path:'employeRegister',component:RegisterComponent},
  { path:'employerRegister', component:EmployerRegisterComponent},
  { path:'employelogin', component:EmployeloginComponent},
  {path:'companylogin',component:CompanyloginComponent},
  {path:'home',component:Home2Component},
  {path:'profile',component:ProfileComponent},
  {path:'uploadDoc',component:UploadDocumentComponent},
  {path:'companyHome',component:CompanyHomeComponent},
  // {path:'companyHome',component:CompanyHomeComponent},
  {path:'companyprofile',component:CompanyProfileComponent},
  {path:'postjob',component:PostJobsComponent},
  {path:'viewempprofile',component:ViewEmpProfileComponent},
  {path:'viewpostjobs',component:ViewPostJobsComponent},
  {path:'logout',component:EmployeloginComponent},
  {path:'viewjobs',component:ViewPostJobsComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
