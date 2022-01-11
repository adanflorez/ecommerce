import { createReducer, on } from '@ngrx/store';
import CartItem from 'src/app/core/model/cart-item.model';
import Product from 'src/app/core/model/product.model';
import {
  addItemToCart,
  loadProducts,
  loadProductsSuccess,
} from '../actions/product.actions';

export interface ProductState {
  loading: boolean;
  mostPurchased: ReadonlyArray<Product>;
  cart: ReadonlyArray<CartItem>;
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
    const index = state.cart.findIndex((el) => el.product.id === item.product.id);
    if (index > -1) {
      const newItem = { ...state.cart[index] };
      newItem.quantity += 1;
      const newCart = [...state.cart]
      newCart[index] = newItem
      return { ...state, cart: newCart };
    } else {
      return { ...state, cart: [...state.cart, item] };
    }
  })
);
