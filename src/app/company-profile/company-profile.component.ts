import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import {CompanyprofileService} from '../shared/companyprofile.service';
import {Companyprofile} from '../shared/companyprofile.model'

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {

  constructor(private router:Router, private companyprofileservice:CompanyprofileService) { }

  viewcompanyprofile:any=[];
  compprofile:Companyprofile[];
  id:String;


  ngOnInit() {

    this.id=sessionStorage.getItem('userid');
   console.log(this.id);

    this.companyprofileservice.viewcompanyprofile(this.id).subscribe((res)=>{
      this.viewcompanyprofile=res;
      this.compprofile=this.viewcompanyprofile;
    })

  }

  CompanyForm(form:NgForm){
    console.log(form.value);
    this.companyprofileservice.NewRecord1(form.value).subscribe((res)=>{
      alert('data inserted successfully')
    },(err)=>{
      console.log(err);
    })
    
  }


}
