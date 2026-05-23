import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Corpo_apresentacao } from './Corpo_apresentacao';

describe('Corpo', () => {
  let component: Corpo_apresentacao;
  let fixture: ComponentFixture<Corpo_apresentacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Corpo_apresentacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Corpo_apresentacao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
