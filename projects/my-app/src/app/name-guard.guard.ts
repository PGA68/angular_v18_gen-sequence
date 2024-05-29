import type { CanActivateFn } from '@angular/router';

export const nameGuardGuard: CanActivateFn = (route, state) => {
  return true;
};
