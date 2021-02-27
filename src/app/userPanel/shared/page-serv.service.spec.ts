import { TestBed } from '@angular/core/testing';

import { PageServService } from './page-serv.service';

describe('PageServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageServService = TestBed.get(PageServService);
    expect(service).toBeTruthy();
  });
});
