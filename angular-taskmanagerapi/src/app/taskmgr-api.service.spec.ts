import { TestBed } from '@angular/core/testing';

import { TaskmgrApiService } from './taskmgr-api.service';

describe('TaskmgrApiService', () => {
  let service: TaskmgrApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskmgrApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
