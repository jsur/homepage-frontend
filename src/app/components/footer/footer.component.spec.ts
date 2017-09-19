import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    component.footerData = {
      includes: {
        Asset: [
          {
            fields: {
              file: {
                url: 'https://www.coinsilium.com/images/consentio-company-logo.png'
              }
            }
          }
        ]
      },
      items: [
        {
          fields: {
            footerLinks: ['Terms & Conditions', 'Legal'],
            footerCopyright: '© Consentio Blockchain SL, 2017'

          }
        }
      ]
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
