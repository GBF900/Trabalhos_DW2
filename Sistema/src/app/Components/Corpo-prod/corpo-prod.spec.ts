import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpoProd } from './corpo-prod';

describe('BotaoProd', () => {
  let component:  CorpoProd ;
  let fixture: ComponentFixture< CorpoProd >;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CorpoProd ]
    })
    .compileComponents();

    fixture = TestBed.createComponent( CorpoProd );
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
