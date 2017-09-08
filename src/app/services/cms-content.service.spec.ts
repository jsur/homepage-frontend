import { TestBed, inject } from '@angular/core/testing';

import { CmsContentService } from './cms-content.service';

describe('CmsContentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CmsContentService]
    });
  });

  it('should be created', inject([CmsContentService], (service: CmsContentService) => {
    expect(service).toBeTruthy();
  }));
});
