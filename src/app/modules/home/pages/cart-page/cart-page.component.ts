import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// Store
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { selectProductsCartItems, selectProductsTotalPrice } from 'src/app/store/products/selectors/products.selectors';
import {
  decrementItemQuantity,
  incrementItemQuantity,
  removeItemFromCart,
} from 'src/app/store/products/actions/product.actions';
// Models
import CartItem from 'src/app/core/model/cart-item.model';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  cartItems$: Observable<CartItem[]> = new Observable();
  totalPrice$: Observable<number> = new Observable();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.cartItems$ = this.store.select(selectProductsCartItems);
    this.totalPrice$ = this.store.select(selectProductsTotalPrice);
  }

  public increment(item: CartItem): void {
    this.store.dispatch(incrementItemQuantity({ product: item.product }));
  }

  public decrement(item: CartItem): void {
    this.store.dispatch(decrementItemQuantity({ product: item.product }));
  }

  public removeItem(item: CartItem): void {
    this.store.dispatch(removeItemFromCart({ product: item.product }));
  }
}
