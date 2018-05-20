import { TestBed, inject } from '@angular/core/testing';

import { AntService } from './ant.service';

describe('AntService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AntService]
    });
  });

  it('should be created', inject([AntService], (service: AntService) => {
    expect(service).toBeTruthy();
  }));
});
