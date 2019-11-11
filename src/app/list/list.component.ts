import { ListService } from './../services/list';
import { selectListUser, selectLoading } from './../store/selectors/list.selector';
import { GetListUserAction } from './../store/actions/list.action';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { filter, takeUntil, mergeAll, mergeMap, flatMap, take, exhaustMap } from 'rxjs/operators';
import { Subject, interval, Subscription, ReplaySubject, BehaviorSubject, Observable, AsyncSubject, combineLatest } from 'rxjs';

import { of, from } from 'rxjs';
import { map, delay, switchAll, switchMap } from 'rxjs/operators';
import { ListUser } from '../core/models/list-model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  selectListUser$ = this.store.pipe(select(selectListUser));
  loading$ = this.store.pipe(select(selectLoading));

  subscription: Subscription;
  list: ListUser[];

  //Subject
  subject$ = new Subject();
  replaySub$ = new ReplaySubject(2); // number buffer values
  behavior$ = new BehaviorSubject(0); // init value
  async$ = new AsyncSubject();

  private completion$ = new Subject<boolean>();

  constructor(
    private store: Store<any>,
    private listService: ListService,
  ) {}

  ngOnInit() {
    this.store.dispatch( new GetListUserAction());

    this.selectListUser$
    .pipe(
      filter(x => !!x),
      takeUntil(this.completion$)
    )
    .subscribe( (list: ListUser[]) => {
      this.list = list;
    });

    // combineLatest([
    //   this.currency$,
    //   this.userState$
    //   ])
    // .pipe(takeUntil(this.completion$))
    // .subscribe( (currencies, userState) => {

    // }

    // this.subscription = this.listService.getListMobile()
    // .subscribe(
    //     results => {

    //     }
    // );


const getData = (param) => {
  console.log('param' ,param);
  return of(`retrieved new data with param ${param}`).pipe(
    delay(1000)
  )
}

// using a regular map
from([1,2,3,4]).pipe(
  map(param => getData(param))
).subscribe(val => val.subscribe(data => console.log('map',data)));

// using map and switchAll
from([1,2,3,4]).pipe(
  map(param => getData(param)),
  switchAll()
).subscribe(val => console.log('switchAll', val));

// using switchMap
from([1,2,3,4]).pipe(
  switchMap(param => getData(param))
).subscribe(val => console.log('switchMap', val));

from([1,2,3,4]).pipe(
  exhaustMap(param => getData(param))
).subscribe(val => console.log('exhaustMap', val));


// using map and mergeAll
  from([1,2,3,4]).pipe(
    map(param => getData(param)),
    mergeAll()
  ).subscribe(val => console.log('mergeAll', val));

// using mergeMap
from([1,2,3,4]).pipe(
  flatMap(param => getData(param))
).subscribe(val => console.log('flatMap' ,val));



this.subject$.subscribe({
  next: (v) => console.log('subjectA: ' + v),
});

this.subject$.subscribe({
  next: (v) => console.log('subjectB: ' + v),
  error: err => console.error('error: ' + err),
  complete: () => console.log('subjectA: done')
});

const observable = interval(500).pipe(take(5));

observable.subscribe(this.subject$);


// BehaviorSubjct
  this.behavior$.subscribe({
    next: (v) => console.log('behaviorA: ' + v)
  });

  this.behavior$.next(1);
  this.behavior$.next(2); //buffer current value for new subscribers

  this.behavior$.subscribe({
    next: (v) => console.log('behaviorB: ' + v)
  });

  this.behavior$.next(3);

//ReplaySubject
this.replaySub$.subscribe({
  next: (v) => console.log('replaySubA: ' + v)
});

this.replaySub$.next(1);
this.replaySub$.next(2);
this.replaySub$.next(3);
this.replaySub$.next(4);

this.replaySub$.subscribe({
  next: (v) => console.log('replaySubB: ' + v)
});

this.replaySub$.next(5);

//AsyncSubject
this.async$.subscribe({
  next: (v) => console.log('asyncA: ' + v)
});

this.async$.next(1);
this.async$.next(2);
this.async$.next(3);
this.async$.next(4);

this.async$.subscribe({
  next: (v) => console.log('asyncB: ' + v),
});

this.async$.next(5);
this.async$.complete(); // Have to completed for emit last value
}

ngOnDestroy() {
  this.completion$.complete();
  this.subscription.unsubscribe();
}
}
