import { TestBed } from '@angular/core/testing';

import { MyService4libService } from './my-service4lib.service';

describe('MyService4libService', () => {
  let service: MyService4libService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyService4libService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
