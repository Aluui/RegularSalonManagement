import { TestBed } from '@angular/core/testing';

import { ViewClientsService } from './view-clients.service';

describe('ViewClientsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewClientsService = TestBed.get(ViewClientsService);
    expect(service).toBeTruthy();
  });
});
