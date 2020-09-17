import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { StudentloginserviceService } from '../shared/studentloginservice.service'

@Component({
  selector: 'app-companylogin',
  templateUrl: './companylogin.component.html',
  styleUrls: ['./companylogin.component.css']
})
export class CompanyloginComponent implements OnInit {

  constructor(private router: Router, private loginservice: StudentloginserviceService) { }
  id: string;
  loginData: any = [];
  ngOnInit() {
  }


  onLogin(form: NgForm) {
    console.log(form.value);
    this.loginservice.newRecord(form.value).subscribe((res) => {
      this.loginData = res;

      console.log(res['token'])
      this.loginservice.setToken(res['token']);
      this.id = this.loginData.id._id;
      console.log(this.id);

      sessionStorage.setItem('userid', this.id);
      this.router.navigateByUrl('/companyHome');

    },
      (err) => {
        console.log(err);

      })
  }

  // home(){
  //   this.router.navigateByUrl('/companyHome');



}
