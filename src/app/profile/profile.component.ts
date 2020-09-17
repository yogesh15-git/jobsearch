import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import {EmpProfileService} from '../shared/emp-profile.service';
import { Student } from '../shared/student.model';
import { StudentService } from '../shared/student.service';
import {EmpProfile} from '../shared/emp-profile.model';
import {StudentloginserviceService} from'../shared/studentloginservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private EProService:EmpProfileService,private stService:StudentService,private studentloginservice:StudentloginserviceService, private router:Router) { }

  viewempprofile:any=[];
  empdetails:EmpProfile[];

  studentdata:any=[];
  getData:Student[];
  id:string;
  ngOnInit() {
   this.id=sessionStorage.getItem('userid');
   console.log(this.id);

    // this.stService.getData().subscribe((res)=>{
    //   this.studentdata=res;
    //   this.getData=this.studentdata.User;


    // })

    this.EProService.viewempprofile(this.id).subscribe((res)=>{
      this.viewempprofile=res;
      this.empdetails=this.viewempprofile;
    })
    
  }

  onSubmit(form:NgForm){
    console.log(form.value);
    this.EProService.NewRecord1(form.value).subscribe((res)=>{
      alert('data inserted successfully')
    },(err)=>{
      console.log(err);
    })
  }
  
  

}
