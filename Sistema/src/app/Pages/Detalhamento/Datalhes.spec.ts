import { ComponentFixture, TestBed } from '@angular/core/testing';
import {Detalhamento} from './Detalhes'

describe('Detalhes', () => {
  let component:Detalhamento;
  let fixture: ComponentFixture<Detalhamento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Detalhamento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Detalhamento);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
