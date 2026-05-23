import { TestBed } from '@angular/core/testing';

import { UsuarioAleatorioService } from './UsuarioAleatorioService';

describe('UsuarioAleatorioService', () => {
  let service: UsuarioAleatorioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioAleatorioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
