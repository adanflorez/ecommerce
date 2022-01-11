import { createAction, props } from '@ngrx/store';
import Product from 'src/app/core/model/product.model';
import { LOAD_PRODUCTS, LOAD_PRODUCTS_SUCCESS } from '../types';

export const loadProducts = createAction(LOAD_PRODUCTS);

export const loadProductsSuccess = createAction(
  LOAD_PRODUCTS_SUCCESS,
  props<{ products: Product[] }>()
);
