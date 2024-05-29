import { TestBed } from '@angular/core/testing';

import { MyServoceService } from './my-servoce.service';

describe('MyServoceService', () => {
  let service: MyServoceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyServoceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
