import { catchError } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../services/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignUpComponent implements OnInit {

  errorMessage: boolean;

  public formGroup: FormGroup = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(6)]],
  })

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
  ) { }

  ngOnInit() {

  }

  signup() {
    const formValues = this.formGroup.getRawValue();
    this.loginService.signup(formValues).subscribe(res => {
      if (res['status'] === 201) {
        this.router.navigate(['/login']);
      }
    }, catchError => {
      this.errorMessage = true;
    })
  }

}
