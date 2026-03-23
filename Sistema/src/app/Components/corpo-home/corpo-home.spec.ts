import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpoHome } from './corpo-home';

describe('CorpoHome', () => {
  let component: CorpoHome;
  let fixture: ComponentFixture<CorpoHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorpoHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorpoHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
