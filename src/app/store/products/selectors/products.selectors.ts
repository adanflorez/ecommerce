import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.state';
import { ProductState } from '../reducers/products.reducers';

export const selectProducts = (state: AppState) => state.products;

export const selectProductsMostPurchased = createSelector(
  selectProducts,
  (state: ProductState) => state.mostPurchased
);

export const selectProductsLoading = createSelector(
  selectProducts,
  (state: ProductState) => state.loading
);

export const selectProductsCartItemsQuantity = createSelector(
  selectProducts,
  (state: ProductState) => {
    let actualQuantity = 0;
    state.cart.forEach((item) => (actualQuantity += item.quantity));
    return actualQuantity;
  }
);
export const selectProductsCartItems = createSelector(
  selectProducts,
  (state: ProductState) => {
    return state.cart;
  }
);
