import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextGeneratorArchiveCardComponent } from './text-generator-archive-card.component';

describe('TextGeneratorArchiveCardComponent', () => {
  let component: TextGeneratorArchiveCardComponent;
  let fixture: ComponentFixture<TextGeneratorArchiveCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextGeneratorArchiveCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextGeneratorArchiveCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
