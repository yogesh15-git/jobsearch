import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPostJobsComponent } from './view-post-jobs.component';

describe('ViewPostJobsComponent', () => {
  let component: ViewPostJobsComponent;
  let fixture: ComponentFixture<ViewPostJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPostJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPostJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
