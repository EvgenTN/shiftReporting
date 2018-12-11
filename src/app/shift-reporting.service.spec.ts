import { TestBed } from '@angular/core/testing';

import { ShiftReportingService } from './shift-reporting.service';

describe('ShiftReportingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShiftReportingService = TestBed.get(ShiftReportingService);
    expect(service).toBeTruthy();
  });
});
