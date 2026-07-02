import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPrivado } from './layout-privado';

describe('LayoutPrivado', () => {
  let component: LayoutPrivado;
  let fixture: ComponentFixture<LayoutPrivado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutPrivado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutPrivado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
