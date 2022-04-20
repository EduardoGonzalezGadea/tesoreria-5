import { TestBed } from '@angular/core/testing';

import { SpinnerCargandoInterceptor } from './spinner-cargando.interceptor';

describe('SpinnerCargandoInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SpinnerCargandoInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SpinnerCargandoInterceptor = TestBed.inject(SpinnerCargandoInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
