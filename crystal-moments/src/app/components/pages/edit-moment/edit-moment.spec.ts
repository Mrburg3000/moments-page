import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMoment } from './edit-moment';

describe('EditMoment', () => {
  let component: EditMoment;
  let fixture: ComponentFixture<EditMoment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditMoment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMoment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
