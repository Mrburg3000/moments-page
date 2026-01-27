import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Moment } from './moment';

describe('Moment', () => {
  let component: Moment;
  let fixture: ComponentFixture<Moment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Moment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Moment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
