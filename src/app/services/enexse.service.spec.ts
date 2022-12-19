import { TestBed } from '@angular/core/testing';

import { EnexseService } from './enexse.service';

describe('EnexseService', () => {
  let service: EnexseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnexseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
