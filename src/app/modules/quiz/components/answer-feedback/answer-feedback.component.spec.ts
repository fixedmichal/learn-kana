import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerFeedbackComponent } from './answer-feedback.component';

describe('AnswerFeedbackComponent', () => {
  let component: AnswerFeedbackComponent;
  let fixture: ComponentFixture<AnswerFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerFeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswerFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
