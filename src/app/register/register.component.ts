import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../shared/student.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private router:Router,private stService:StudentService) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    console.log(form.value);
   this.stService.newRecord(form.value).subscribe((res)=>{
     alert('data inserted successfully');
   },(err)=>{
     console.log(err);
   })
   this.router.navigateByUrl('/employelogin');

  }
  // home(){
  //   this.router.navigateByUrl('/employelogin');
  // }

}
