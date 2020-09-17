import { Component, OnInit } from '@angular/core';
import { EmpProfileService } from '../shared/emp-profile.service';
import {EmpProfile} from '../shared/emp-profile.model';

@Component({
  selector: 'app-view-emp-profile',
  templateUrl: './view-emp-profile.component.html',
  styleUrls: ['./view-emp-profile.component.css']
})
export class ViewEmpProfileComponent implements OnInit {

  constructor(private profileservice:EmpProfileService) { }

  viewempprofile:any=[];
  empdetails:EmpProfile[];

  ngOnInit() {
    this.profileservice.viewempprofile("UserId").subscribe((res)=>{
      this.viewempprofile=res;
      this.empdetails=this.viewempprofile;
    })
  }

}
