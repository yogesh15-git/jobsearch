import { Injectable } from '@angular/core';
import { LoginModel } from '../shared/login-model.model'
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentloginserviceService {

  stlogin: LoginModel = {
    email: '',
    password: ''
  }
  constructor(private http: HttpClient) { }

  newRecord(nlogin) {
    return this.http.post('/login', nlogin);
  }
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  removeToken() {
    localStorage.removeItem('token');
  }
}
