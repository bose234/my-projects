import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userlogin1Component } from './userlogin1.component';

describe('Userlogin1Component', () => {
  let component: Userlogin1Component;
  let fixture: ComponentFixture<Userlogin1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Userlogin1Component]
    });
    fixture = TestBed.createComponent(Userlogin1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
