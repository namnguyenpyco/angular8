import { createFeatureSelector, createSelector } from '@ngrx/store';
export const selectUserListState = createFeatureSelector<any>('list');

export const selectListUser = createSelector(
  selectUserListState,
  (state: any) => state.list && state.list.list
);

export const selectLoading = createSelector(
  selectUserListState,
  (state: any) => state.loading
);
