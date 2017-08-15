import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterFormingComponent } from './footer-forming.component';

describe('FooterFormingComponent', () => {
  let component: FooterFormingComponent;
  let fixture: ComponentFixture<FooterFormingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterFormingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterFormingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
