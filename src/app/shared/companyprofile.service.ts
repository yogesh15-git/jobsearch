import { Injectable } from '@angular/core';
import { EmpProfile } from '../shared/emp-profile.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Companyprofile } from './companyprofile.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyprofileService {

  Cprofile: Companyprofile = {

    UserId: sessionStorage.getItem('userid'),
    AssistantManager: '',
    CompanyName: '',
    CompanyEmailAddress: '',
    Companydescription: '',
    City: '',
    State: '',
    Country: '',
    Pincode: '',
    Email: ''



  }

  constructor(private httpclient: HttpClient) { }

  NewRecord1(nEmpProfile: EmpProfile) {
    return this.httpclient.post('/compro', nEmpProfile)
  }

  viewcompanyprofile(id: String) {
    return this.httpclient.get('/companyprofile/' + id);
  }

}
