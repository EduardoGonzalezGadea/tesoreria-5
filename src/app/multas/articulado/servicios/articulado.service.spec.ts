import { TestBed } from '@angular/core/testing';

import { ArticuladoService } from './articulado.service';

describe('ArticuladoService', () => {
  let service: ArticuladoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticuladoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
