import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {StudentService} from '../shared/student.service';

@Component({
  selector: 'app-employer-register',
  templateUrl: './employer-register.component.html',
  styleUrls: ['./employer-register.component.css']
})
export class EmployerRegisterComponent implements OnInit {

  constructor(private router:Router, private stService:StudentService) { }

  ngOnInit() {
  }
  onSubmit(form:NgForm){
    console.log(form.value);
   this.stService.newRecord(form.value).subscribe((res)=>{
     alert('data inserted successfully');
   },(err)=>{
     console.log(err);
   })
   this.router.navigateByUrl('/companylogin');

  }


  home(){
    this.router.navigateByUrl('/home')
  }

}
