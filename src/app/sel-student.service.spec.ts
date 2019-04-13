import { TestBed } from '@angular/core/testing';

import { SelStudentService } from './sel-student.service';

describe('SelStudentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelStudentService = TestBed.get(SelStudentService);
    expect(service).toBeTruthy();
  });
});
