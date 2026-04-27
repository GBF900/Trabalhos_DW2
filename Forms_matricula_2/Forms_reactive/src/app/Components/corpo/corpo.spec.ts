import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Corpo } from './corpo';

describe('Corpo', () => {
  let component: Corpo;
  let fixture: ComponentFixture<Corpo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Corpo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Corpo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
