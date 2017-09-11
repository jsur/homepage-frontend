import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { CmsContentService } from './cms-content.service';

describe('CmsContentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [CmsContentService]
    });
  });

  it('should be created', inject([CmsContentService], (service: CmsContentService) => {
    expect(service).toBeTruthy();
  }));
});
