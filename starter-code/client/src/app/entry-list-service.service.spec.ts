import { TestBed, inject } from '@angular/core/testing';

import { EntryListServiceService } from './entry-list-service.service';

describe('EntryListServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntryListServiceService]
    });
  });

  it('should ...', inject([EntryListServiceService], (service: EntryListServiceService) => {
    expect(service).toBeTruthy();
  }));
});
