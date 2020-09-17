import { TestBed } from '@angular/core/testing';

import { CompanyprofileService } from './companyprofile.service';

describe('CompanyprofileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompanyprofileService = TestBed.get(CompanyprofileService);
    expect(service).toBeTruthy();
  });
});
