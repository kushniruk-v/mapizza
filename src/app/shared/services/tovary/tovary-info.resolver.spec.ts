import { TestBed } from '@angular/core/testing';

import { TovaryInfoResolver } from './tovary-info.resolver';

describe('TovaryInfoResolver', () => {
  let resolver: TovaryInfoResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TovaryInfoResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
