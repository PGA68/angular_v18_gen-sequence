import { TestBed } from '@angular/core/testing';

import { MyResolver4libService } from './my-resolver4lib.service';

describe('MyResolver4libService', () => {
  let service: MyResolver4libService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyResolver4libService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
