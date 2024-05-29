import { TestBed } from '@angular/core/testing';
import type { HttpInterceptorFn } from '@angular/common/http';

import { myInterceptor4libInterceptor } from './my-interceptor4lib.interceptor';

describe('myInterceptor4libInterceptor', () => {
  const interceptor: HttpInterceptorFn = (req, next) => 
    TestBed.runInInjectionContext(() => myInterceptor4libInterceptor(req, next));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
