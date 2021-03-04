import { TestBed } from '@angular/core/testing';

import { YemeksepetiService } from './yemeksepeti.service';

describe('YemeksepetiService', () => {
  let service: YemeksepetiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YemeksepetiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
