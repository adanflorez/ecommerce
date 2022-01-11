import { createAction, props } from '@ngrx/store';
import CartItem from 'src/app/core/model/cart-item.model';
import Product from 'src/app/core/model/product.model';
import {
  ADD_ITEM_TO_CART,
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_SUCCESS,
} from '../types';

export const loadProducts = createAction(LOAD_PRODUCTS);

export const loadProductsSuccess = createAction(
  LOAD_PRODUCTS_SUCCESS,
  props<{ products: Product[] }>()
);

export const addItemToCart = createAction(
  ADD_ITEM_TO_CART,
  props<{ item: CartItem }>()
);
