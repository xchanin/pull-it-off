import { TestBed } from '@angular/core/testing';

import { MiniSidenavService } from './mini-sidenav.service';

describe('MiniSidenavService', () => {
  let service: MiniSidenavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiniSidenavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
