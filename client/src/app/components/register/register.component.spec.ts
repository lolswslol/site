import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import  {AuthService } from "../../services/auth.service";

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(() => {

   let authServiceStub={
      domain:'lol'
    };

    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      providers:[{provide:AuthService,useValue: authServiceStub}]
    });

    fixture = TestBed.createComponent(RegisterComponent);
    component    = fixture.componentInstance;

    // UserService from the root injector
    /*userService = TestBed.get(UserService);*/

    //  get the "welcome" element by CSS selector (e.g., by class name)
    /*de = fixture.debugElement.query(By.css('.welcome'));
    el = de.nativeElement;*/
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
