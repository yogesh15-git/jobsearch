import { TestBed } from '@angular/core/testing';

import { StudentloginserviceService } from './studentloginservice.service';

describe('StudentloginserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentloginserviceService = TestBed.get(StudentloginserviceService);
    expect(service).toBeTruthy();
  });
});
