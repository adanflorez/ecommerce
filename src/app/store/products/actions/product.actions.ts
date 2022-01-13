import { createAction, props } from '@ngrx/store';
import CartItem from 'src/app/core/model/cart-item.model';
import Product from 'src/app/core/model/product.model';
import {
  ADD_ITEM_TO_CART,
  DECREMENT_ITEM_QUANTITY,
  INCREMENT_ITEM_QUANTITY,
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

export const incrementItemQuantity = createAction(
  INCREMENT_ITEM_QUANTITY,
  props<{ product: Product }>()
);

export const decrementItemQuantity = createAction(
  DECREMENT_ITEM_QUANTITY,
  props<{ product: Product }>()
);
