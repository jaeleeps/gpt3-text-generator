import { TestBed } from '@angular/core/testing';

import { TextGeneratorRequestService } from './text-generator-request.service';

describe('TextGeneratorRequestService', () => {
  let service: TextGeneratorRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextGeneratorRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
