import { TestBed } from '@angular/core/testing';

import { UserSenderService } from './user-sender.service';

describe('UserSenderService', () => {
  let service: UserSenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
