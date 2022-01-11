import { createReducer, on } from '@ngrx/store';
import Product from 'src/app/core/model/product.model';
import { loadProducts, loadProductsSuccess } from '../actions/product.actions';

export interface ProductState {
  loading: boolean;
  mostPurchased: ReadonlyArray<Product>;
}

export const initialState: ProductState = {
  loading: false,
  mostPurchased: [],
};

export const productsReducer = createReducer(
  initialState,
  on(loadProducts, (state) => {
    return { ...state, loading: true };
  }),
  on(loadProductsSuccess, (state, { products }) => {
    return { ...state, loading: false, mostPurchased: products };
  })
);
