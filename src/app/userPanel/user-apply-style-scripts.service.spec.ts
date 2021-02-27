import { TestBed } from '@angular/core/testing';

import { UserApplyStyleScriptsService } from './user-apply-style-scripts.service';

describe('UserApplyStyleScriptsService', () => {
  let service: UserApplyStyleScriptsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserApplyStyleScriptsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
