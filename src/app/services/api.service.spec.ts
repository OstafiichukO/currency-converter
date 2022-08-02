import { TestBed } from '@angular/core/testing';
import ApiService from './api.service'

describe('ApiService', () => {
  let api: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    api = TestBed.inject(ApiService)
  });

  it('Should be created', () => {
    expect(api).toBeTruthy();
  });
});