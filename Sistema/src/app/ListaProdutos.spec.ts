import { TestBed } from '@angular/core/testing';

import { ListaProdutos } from './ListaProdutos';

describe('Produtos', () => {
  let service: ListaProdutos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaProdutos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
