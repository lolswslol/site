import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarFormingComponent } from './navbar-forming.component';

describe('NavbarFormingComponent', () => {
  let component: NavbarFormingComponent;
  let fixture: ComponentFixture<NavbarFormingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarFormingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarFormingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
