import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpoDet } from './corpo-det';

describe('CorpoDet', () => {
  let component: CorpoDet;
  let fixture: ComponentFixture<CorpoDet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorpoDet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorpoDet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
