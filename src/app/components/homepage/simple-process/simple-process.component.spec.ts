import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleProcessComponent } from './simple-process.component';

describe('SimpleProcessComponent', () => {
  let component: SimpleProcessComponent;
  let fixture: ComponentFixture<SimpleProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
