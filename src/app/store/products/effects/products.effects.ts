import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap } from 'rxjs';
import { GlobalService } from 'src/app/shared/services/global.service';
import { LOAD_PRODUCTS, LOAD_PRODUCTS_SUCCESS } from '../types';

@Injectable()
export class ProductsEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LOAD_PRODUCTS),
      mergeMap(() =>
        this.globalService.getAllProducts(8).pipe(
          map((products) => ({ type: LOAD_PRODUCTS_SUCCESS, products })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private globalService: GlobalService
  ) {}
}
