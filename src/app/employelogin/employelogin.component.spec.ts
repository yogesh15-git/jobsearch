import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeloginComponent } from './employelogin.component';

describe('EmployeloginComponent', () => {
  let component: EmployeloginComponent;
  let fixture: ComponentFixture<EmployeloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
