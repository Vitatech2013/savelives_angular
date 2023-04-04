import { TestBed } from '@angular/core/testing';

import { OrgainisationService } from './orgainisation.service';

describe('OrgainisationService', () => {
  let service: OrgainisationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrgainisationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
