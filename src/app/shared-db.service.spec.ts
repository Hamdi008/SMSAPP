import { TestBed } from '@angular/core/testing';

import { SharedDbService } from './shared-db.service';

describe('SharedDbService', () => {
  let service: SharedDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
