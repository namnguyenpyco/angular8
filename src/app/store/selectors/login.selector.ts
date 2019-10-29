import { createFeatureSelector, createSelector } from '@ngrx/store';
export const selectUserState = createFeatureSelector<any>('user');

export const selectUser = createSelector(
  selectUserState,
  (state: any) => state.user
);

export const selectEmail = createSelector(
  selectUserState,
  (state: any) => state.user && state.user.email
);
