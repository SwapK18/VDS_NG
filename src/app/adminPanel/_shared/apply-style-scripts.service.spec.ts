import { TestBed } from '@angular/core/testing';

import { ApplyStyleScriptsService } from './apply-style-scripts.service';

describe('ApplyStyleScriptsService', () => {
  let service: ApplyStyleScriptsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplyStyleScriptsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
