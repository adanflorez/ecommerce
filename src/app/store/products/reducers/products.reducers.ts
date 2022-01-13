import { createReducer, on } from '@ngrx/store';
import CartItem from 'src/app/core/model/cart-item.model';
import Product from 'src/app/core/model/product.model';
import {
  addItemToCart,
  incrementItemQuantity,
  loadProducts,
  loadProductsSuccess,
} from '../actions/product.actions';

export interface ProductState {
  loading: boolean;
  mostPurchased: Product[];
  cart: CartItem[];
}

export const initialState: ProductState = {
  loading: false,
  mostPurchased: [],
  cart: [],
};

export const productsReducer = createReducer(
  initialState,
  on(loadProducts, (state) => {
    return { ...state, loading: true };
  }),
  on(loadProductsSuccess, (state, { products }) => {
    return { ...state, loading: false, mostPurchased: products };
  }),
  on(addItemToCart, (state, { item }) => {
    const index = state.cart.findIndex(
      (el) => el.product.id === item.product.id
    );
    if (index > -1) {
      const newItem = { ...state.cart[index] };
      newItem.quantity += item.quantity;
      const newCart = [...state.cart];
      newCart[index] = newItem;
      return { ...state, cart: newCart };
    } else {
      return { ...state, cart: [...state.cart, { ...item }] };
    }
  }),
  on(incrementItemQuantity, (state, { product }) => {
    const index = state.cart.findIndex((el) => el.product.id === product.id);
    if (index > -1) {
      state.cart[index].quantity = state.cart[index].quantity + 1;
    }
    return { ...state };
  })
);
