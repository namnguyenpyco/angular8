import { catchError, filter, takeUntil } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../services/login';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { LoginAction } from '../store/actions/login.action';
import { selectUser } from '../store/selectors/login.selector';
import { Subject } from 'rxjs';

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
    address: '364 Cong Hoa',
    age: 30,
    phone: '0989667889',
  }

  public formGroup: FormGroup = this.fb.group({
    email: [null, [Validators.required]],
    password: [null, [Validators.required]],
  })

  public formBinding: FormGroup = this.fb.group({
    name: [null, [Validators.required]],
    address: [null, [Validators.required]],
    age: null,
    phone: null,
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
    .subscribe(user => this.router.navigate(['']));

    this.formBinding.reset({...this.dataBinding});
  }

  signin() {
    const formValues = this.formGroup.getRawValue();
    this.store.dispatch( new LoginAction(formValues));
  }

  submit() {
    const formValues = this.formBinding.getRawValue();
    console.log(formValues);
  }

}
