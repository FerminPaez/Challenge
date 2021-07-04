/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SocketsService } from './sockets.service';

describe('Service: Sockets', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocketsService]
    });
  });

  it('should ...', inject([SocketsService], (service: SocketsService) => {
    expect(service).toBeTruthy();
  }));
});
