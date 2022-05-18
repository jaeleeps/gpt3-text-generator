import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextGeneratorHomeComponent } from './text-generator-home.component';

describe('TextGeneratorHomeComponent', () => {
  let component: TextGeneratorHomeComponent;
  let fixture: ComponentFixture<TextGeneratorHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextGeneratorHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextGeneratorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
