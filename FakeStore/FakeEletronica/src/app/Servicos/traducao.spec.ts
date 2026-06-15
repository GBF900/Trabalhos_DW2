import { TestBed } from '@angular/core/testing';

import { Traducao } from './traducao';

describe('Traducao', () => {
  let service: Traducao;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Traducao);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
