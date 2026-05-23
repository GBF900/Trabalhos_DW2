import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpoModelo } from './corpo-modelo';

describe('CorpoModelo', () => {
  let component: CorpoModelo;
  let fixture: ComponentFixture<CorpoModelo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorpoModelo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorpoModelo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
