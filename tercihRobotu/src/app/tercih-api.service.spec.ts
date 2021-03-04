import { TestBed } from '@angular/core/testing';

import { TercihApiService } from './tercih-api.service';

describe('TercihApiService', () => {
  let service: TercihApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TercihApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
