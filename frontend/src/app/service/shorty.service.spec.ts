import { TestBed } from '@angular/core/testing';

import { ShortyService } from './shorty.service';

describe('ShortyService', () => {
  let service: ShortyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShortyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
