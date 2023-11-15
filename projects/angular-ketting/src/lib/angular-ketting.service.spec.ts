import { TestBed } from '@angular/core/testing';

import { AngularKettingService } from './angular-ketting.service';

describe('AngularKettingService', () => {
  let service: AngularKettingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularKettingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
