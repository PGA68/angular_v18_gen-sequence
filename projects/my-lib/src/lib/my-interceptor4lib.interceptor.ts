import type { HttpInterceptorFn } from '@angular/common/http';

export const myInterceptor4libInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
