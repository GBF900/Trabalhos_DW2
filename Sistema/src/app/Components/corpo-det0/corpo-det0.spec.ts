import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpoDet0 } from './corpo-det0';

describe('CorpoDet0', () => {
  let component: CorpoDet0;
  let fixture: ComponentFixture<CorpoDet0>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorpoDet0]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorpoDet0);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
