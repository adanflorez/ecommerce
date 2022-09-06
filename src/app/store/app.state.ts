import { ActionReducerMap } from "@ngrx/store";
import { productsReducer, ProductState } from "./products/reducers/products.reducers";

export interface AppState {
  products: ProductState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  products: productsReducer
}
