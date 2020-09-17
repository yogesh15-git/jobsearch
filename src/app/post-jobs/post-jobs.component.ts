import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import {PostjobService} from '../shared/postjob.service';
import {Postjob} from '../shared/postjob.model';

import {environment} from '../../environments/environment';


import { Router } from '@angular/router';


@Component({
  selector: 'app-post-jobs',
  templateUrl: './post-jobs.component.html',
  styleUrls: ['./post-jobs.component.css']
})
export class PostJobsComponent implements OnInit {

  constructor(private router:Router,private postservice:PostjobService) { }
  viewpostjob:any=[];
  postjobmodel:Postjob[];

  ngOnInit() {

    this.postservice.viewpostjob().subscribe((res)=>{
      this.viewpostjob=res;
      this.postjobmodel=this.viewpostjob;
    })
  }

  // postjobform(form:NgForm){
  //   console.log(form.value);
  //   this.postjob.PostNewRecord(form.value).subscribe((res)=>{
  //     alert("data inserted successfully");
  //   },(err)=>{
  //     console.log(err);
  //   })
  // }

  onSubmit(form:NgForm){
    console.log(form.value);
    this.postservice.NewRecordPost(form.value).subscribe((res)=>{
      alert('data inserted successfully')
    },(err)=>{
      console.log(err);
    })
  }

  

  




}


