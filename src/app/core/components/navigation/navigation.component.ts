import { LogoutAction } from './../../../store/actions/login.action';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { selectUser, selectEmail } from '../../../store/selectors/login.selector';

@Component({
  selector: 'app-nav',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavComponent implements OnInit {
  selectEmail$ = this.store.pipe(select(selectEmail));
  private completion$ = new Subject();
  email: string;

  constructor(
    private router: Router,
    private store: Store<any>,
  ) { }

  ngOnInit() {
    this.selectEmail$
    .pipe(
      takeUntil(this.completion$)
    )
    .subscribe(email => this.email = email);
  }

  navigateTo() {
    this.router.navigate(['login']);
  }

  signout() {
    this.store.dispatch( new LogoutAction());
  }

}
