import { TestBed } from '@angular/core/testing';

import { CapacitorSmsService } from './capacitor-sms.service';

describe('CapacitorSmsService', () => {
  let service: CapacitorSmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapacitorSmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
