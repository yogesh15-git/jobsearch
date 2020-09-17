import { Injectable } from '@angular/core';
import { Postjob } from '../shared/postjob.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PostjobService {
  pjobmodel: Postjob = {
    PostDescription: '',
    Company: '',
    Experience: '',
    Location: '',
    JobDescription: '',
    Status: '',
    Openings: '',
    PostTime: '',
  }

  constructor(private httpclient: HttpClient) { }

  NewRecordPost(npostjob: Postjob) {
    return this.httpclient.post('/post', npostjob);
  }

  viewpostjob() {
    return this.httpclient.get('/viewjob');
  }
}
