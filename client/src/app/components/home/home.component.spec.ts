import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HomeComponent } from './home.component';

describe('HomeComponent(inline template)', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component=fixture.componentInstance;

    de=fixture.debugElement.query(By.css('h1'));
    el=de.nativeElement;
  });

  it('no title in the DOM until manually call `detectChanges`', () => {
    expect(el.textContent).toEqual('');
  });
  it('should display original title',()=>{
    fixture.detectChanges();
    expect(el.textContent).toContain(component.title);
  });
  it('Should display different title',()=>{
    component.title='Wow, its another title';
    fixture.detectChanges();
    expect(el.textContent).toContain('Wow, its another title');
  });
 /* beforeEach(() => {

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });*/
});
