import { TestBed } from '@angular/core/testing';

import { ClientsService } from './clients.service';

describe('ViewClientsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientsService = TestBed.get(ClientsService);
    expect(service).toBeTruthy();
  });
});
