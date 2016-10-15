/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WpostService } from './wpost.service';

describe('Service: Wpost', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WpostService]
    });
  });

  it('should ...', inject([WpostService], (service: WpostService) => {
    expect(service).toBeTruthy();
  }));
});
