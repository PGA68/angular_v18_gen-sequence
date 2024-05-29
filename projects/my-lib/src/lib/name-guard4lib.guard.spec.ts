import { TestBed } from '@angular/core/testing';
import type { CanActivateFn } from '@angular/router';

import { nameGuard4libGuard } from './name-guard4lib.guard';

describe('nameGuard4libGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => nameGuard4libGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
