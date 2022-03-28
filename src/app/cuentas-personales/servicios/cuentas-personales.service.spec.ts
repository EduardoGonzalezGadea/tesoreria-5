import { TestBed } from '@angular/core/testing';

import { CuentasPersonalesService } from './cuentas-personales.service';

describe('CuentasPersonalesService', () => {
  let service: CuentasPersonalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuentasPersonalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
