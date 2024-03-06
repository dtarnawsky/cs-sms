import { TestBed } from '@angular/core/testing';

import { CordovaSmsService } from './cordova-sms.service';

describe('CordovaSmsService', () => {
  let service: CordovaSmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CordovaSmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
