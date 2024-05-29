import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { myResolver4libResolver } from './my-resolver4lib.resolver';

describe('myResolver4libResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => myResolver4libResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
