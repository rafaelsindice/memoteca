import { TestBed } from '@angular/core/testing';

import { PensamentoServiceTsService } from './pensamento.service.ts.service';

describe('PensamentoServiceTsService', () => {
  let service: PensamentoServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PensamentoServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
