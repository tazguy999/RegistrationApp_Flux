import { TestBed, inject } from '@angular/core/testing';

import { ProgramStoreService } from './program-store.service';

describe('ProgramStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgramStoreService]
    });
  });

  it('should be created', inject([ProgramStoreService], (service: ProgramStoreService) => {
    expect(service).toBeTruthy();
  }));
});
