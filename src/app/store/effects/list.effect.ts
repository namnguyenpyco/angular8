import { ListActionTypes, GetListUserSuccessAction, GetListUserFaildAction, GetListUserAction } from './../actions/list.action';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { switchMap, map, catchError, flatMap, mergeMap, concatMap, filter } from 'rxjs/operators';
import { of } from 'rxjs';
import { ListService } from '../../services/list';


@Injectable()

export class ListEffects {

  constructor(
    private actions$: Actions<any>,
    private listService: ListService,
  ) { }

  @Effect()
  getListMobile$ = this.actions$.pipe(
    ofType(ListActionTypes.GetListUser),
    switchMap((action: GetListUserAction) => {
      const getListMobile$ = this.listService
        .getListMobile()
        .pipe(
          map(list => new GetListUserSuccessAction(list)),
          catchError(() => of(new GetListUserFaildAction()))
        );
      return getListMobile$;
    })
  );

  // getListMobile$ = this.actions$
  // .pipe(
  //   ofType(
  //     ListActionTypes.GetListUser,
  //   ),
  //   flatMap(x => {
  //     return this.listService
  //       .getListMobile()
  //       .pipe(
  //         mergeMap(x => new GetListUserSuccessAction(x) ),
  //         catchError(() => of(new GetListUserFaildAction()))
  //       );
  //   }));
}



