import { TestBed } from '@angular/core/testing';

import { TovaryService } from './tovary.service';

describe('TovaryService', () => {
  let service: TovaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TovaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
