import { TestBed } from '@angular/core/testing';
import type { CanActivateFn } from '@angular/router';

import { nameGuardGuard } from './name-guard.guard';

describe('nameGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => nameGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
