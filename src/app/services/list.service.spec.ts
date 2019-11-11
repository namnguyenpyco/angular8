import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ListService } from './list';

const MOCK_CONFIG = {
  appConfig: {
    url: 'http://localhost:4200'
  }
};

describe('List Service', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ListService,
      ],
      imports: [
        HttpClientTestingModule
      ],
    });

  });

  it('should be created', () => {
    const service: ListService = TestBed.get(ListService);
    expect(service).toBeTruthy();
  });
});
