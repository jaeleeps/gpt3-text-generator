import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextGeneratorResponseCardComponent } from './text-generator-response-card.component';

describe('TextGeneratorResponseCardComponent', () => {
  let component: TextGeneratorResponseCardComponent;
  let fixture: ComponentFixture<TextGeneratorResponseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextGeneratorResponseCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextGeneratorResponseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
