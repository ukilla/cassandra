import { createAction, props } from '@ngrx/store';
import { LigaModel } from '../types/liga.module';

export const getLige = createAction('[Pocetna Page] Get Liga');

export const getLigeSuccess = createAction(
  '[Pocetna API] Get Liga Success',
  props<{ mesta: LigaModel[] }>()
);

export const getLigeFailure = createAction(
  '[Pocetna API] GetLiga Failure',
  props<{ error: string }>()
);
export const postLiga = createAction(
  '[Liga page] Post Liga',
  props<{
    liga: LigaModel;
  }>()
);

export const postLigaSuccess = createAction(
  '[Liga page] Post Liga Success',
  props<{
    liga: LigaModel;
  }>()
);

export const postLigaFailure = createAction(
  '[Liga  page] Post Liga Failure',
  props<{ error: string }>()
);
