import { TestBed } from '@angular/core/testing';

import { ApprovedguestService } from './approvedguest.service';

describe('ApprovedguestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApprovedguestService = TestBed.get(ApprovedguestService);
    expect(service).toBeTruthy();
  });
});
