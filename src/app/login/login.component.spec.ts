import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginService } from '../services/login';
import { provideMockStore } from '@ngrx/store/testing';

const initialState = {};

describe('Component: Login', () => { // TODO: Fix this test!

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, RouterTestingModule],
      declarations: [LoginComponent],
      providers: [
        {
          provide: LoginService, useValue: {
            appConfig: {
              url: 'test-url'
            }
          }
        },
        provideMockStore({initialState}),
      ]
    });

    // create component and test fixture
    fixture = TestBed.createComponent(LoginComponent);

    // get test component from the fixture
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('form invalid when empty', () => {
    expect(component.formGroup.valid).toBeFalsy();
  });

  it('recourseCompany field validity', () => {
    let errors = {};
    const email = component.formGroup.controls['email'];
    expect(email.valid).toBeFalsy();

    // recourseCompany field is required
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set recourseCompany to something
    email.setValue('test');
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
  });
});
