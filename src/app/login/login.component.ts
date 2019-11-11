import { catchError, filter, takeUntil } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../services/login';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { LoginAction } from '../store/actions/login.action';
import { selectUser } from '../store/selectors/login.selector';
import { Subject } from 'rxjs';
import { UserInfo } from '../core/models/user-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  selectUser$ = this.store.pipe(select(selectUser));
  private completion$ = new Subject();

  errorMessage: boolean;
  dataBinding = {
    name: 'Nam Nguyen',
    age: 30,
    phone: '0989667889',
    address: {
      city: 'Ho Chi Minh',
      country: 'Vietnam',
    }
  }

  public formGroup: FormGroup = this.fb.group({
    email: [null, [Validators.required]],
    password: [null, [Validators.required]],
  })

  public address: FormGroup = this.fb.group({
    city: null,
    country: null,
  })

  public formBinding: FormGroup = this.fb.group({
    name: [null, [Validators.required]],
    age: null,
    phone: null,
    address: this.address,
  })

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private store: Store<any>,
  ) { }

  ngOnInit() {
    this.selectUser$
    .pipe(
      filter(x => !!x),
      takeUntil(this.completion$)
    )
    .subscribe( (user: UserInfo) => {
      if (user.status === 200) {
        this.router.navigate(['']);
      }
    });

    // disable/enable
    this.address.controls.city.disable();

    // set validation required field
    this.formBinding.controls.name.setValidators([Validators.required]);
    this.formBinding.controls.name.setValidators(null);

    this.formBinding.reset({...this.dataBinding});
    const valueAddress = {city: 'Dong Nai', country: 'VietNam'};
    this.address.reset({...valueAddress});
  }

  signin() {
    const formValues = this.formGroup.getRawValue();
    console.log(formValues);
    this.store.dispatch( new LoginAction(formValues));
  }

  submit() {
    const formValues = this.formBinding.getRawValue();
    console.log(formValues);
  }
}
