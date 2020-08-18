import { TestBed } from '@angular/core/testing';

import { EczaneapiserviceService } from './eczaneapiservice.service';

describe('EczaneapiserviceService', () => {
  let service: EczaneapiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EczaneapiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
