import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carregando } from './carregando';

describe('Carregando', () => {
  let component: Carregando;
  let fixture: ComponentFixture<Carregando>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carregando]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carregando);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
