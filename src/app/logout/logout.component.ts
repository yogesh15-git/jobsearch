import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {StudentloginserviceService} from '../shared/studentloginservice.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router,private loginservice:StudentloginserviceService) { }

  ngOnInit() {
    this.loginservice.removeToken();
    this.router.navigateByUrl('login');
  }

}
