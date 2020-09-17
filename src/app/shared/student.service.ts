import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  newStudent: Student = {
    username: '',
    email: '',
    mobileno: '',
    password: ''
  }

  constructor(private http: HttpClient) { }

  newRecord(nStudent: Student) {
    // return this.http.post(environment.url+'signup',nStudent);
    return this.http.post('/signup', nStudent);

  }

  // getData()
  // {
  //   return this.http.get(environment.url+'all');
  // }





}
