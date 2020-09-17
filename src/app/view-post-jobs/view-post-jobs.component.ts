import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostjobService } from '../shared/postjob.service';
import { Postjob } from '../shared/postjob.model';

@Component({
  selector: 'app-view-post-jobs',
  templateUrl: './view-post-jobs.component.html',
  styleUrls: ['./view-post-jobs.component.css']
})
export class ViewPostJobsComponent implements OnInit {

  constructor(private postservice: PostjobService) { }
  viewpostjob: any = [];
  postjobmodel: Postjob[];

  ngOnInit() {
    this.postservice.viewpostjob().subscribe((res) => {
      this.viewpostjob = res;
      this.postjobmodel = this.viewpostjob;
    })

  }
}
